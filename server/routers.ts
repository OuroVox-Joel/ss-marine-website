import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { createConsultationRequest, getAllConsultationRequests } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  consultation: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          country: z.string().min(1, "Country is required"),
          region: z.string().optional(),
          serviceInterest: z.string().optional(),
          message: z.string().optional(),
          source: z.enum(["website", "landing_page"]).default("website"),
        })
      )
      .mutation(async ({ input }) => {
        const request = await createConsultationRequest(input);
        
        // Notify owner about new consultation request
        await notifyOwner({
          title: "New Consultation Request",
          content: `Name: ${input.name}\nEmail: ${input.email}\nCountry: ${input.country}\nService Interest: ${input.serviceInterest || "Not specified"}`,
        });
        
        return { success: true, id: request.id };
      }),
    
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only allow admin users to view consultation requests
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return getAllConsultationRequests();
    }),
  }),
});

export type AppRouter = typeof appRouter;
