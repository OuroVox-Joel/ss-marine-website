import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  country: z.string().min(1, "Country is required"),
  serviceInterest: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultationFormProps {
  source?: "website" | "landing_page";
  variant?: "default" | "compact";
}

export default function ConsultationForm({
  source = "website",
  variant = "default",
}: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const submitMutation = trpc.consultation.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll be in touch soon.");
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    submitMutation.mutate({
      ...data,
      source,
    });
  };

  const services = [
    "Strategic Governance & Compliance",
    "Operational Excellence & Sustainability",
    "Capacity Building & Training",
    "VTS System Design",
    "Port Rules & Regulations",
    "Tug & Pilotage Operations",
    "Workforce Training & Nationalization",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            className="mt-1"
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="country">Country/Region *</Label>
          <Input
            id="country"
            {...register("country")}
            placeholder="Your country or region"
            className="mt-1"
          />
          {errors.country && (
            <p className="text-sm text-destructive mt-1">{errors.country.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="serviceInterest">What do you need help with?</Label>
          <Select onValueChange={(value) => setValue("serviceInterest", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {variant === "default" && (
        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Tell us more about your project or requirements..."
            className="mt-1 min-h-[120px]"
          />
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Consultation"
        )}
      </Button>
    </form>
  );
}
