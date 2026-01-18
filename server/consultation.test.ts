import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("consultation.submit", () => {
  it("successfully submits a consultation request with all required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.consultation.submit({
      name: "John Doe",
      email: "john.doe@example.com",
      country: "Nigeria",
      serviceInterest: "VTS System Design",
      message: "We are planning a new port project and need expert guidance.",
      source: "website",
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");
  });

  it("successfully submits a consultation request with only required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.consultation.submit({
      name: "Jane Smith",
      email: "jane.smith@example.com",
      country: "South Africa",
      source: "landing_page",
    });

    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("id");
  });

  it("rejects submission with missing required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.consultation.submit({
        name: "",
        email: "invalid-email",
        country: "",
        source: "website",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.consultation.submit({
        name: "Test User",
        email: "not-an-email",
        country: "Kenya",
        source: "website",
      })
    ).rejects.toThrow();
  });
});
