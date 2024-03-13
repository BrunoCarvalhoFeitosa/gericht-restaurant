"use client"
import { FormEvent, useRef } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import emailjs from "@emailjs/browser"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { formatDocument } from "@/utils/format-document"
 
const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters."
    }).max(50),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters."
    }).max(50),
    document: z.string().min(14, {
        message: "Document must be at least 14 characters."
    }).max(18),
    guests: z.string().min(1, {
        message: "Select the number os guests."
    }).max(10),
    date: z.date({
        required_error: "A date is required.",
    }),
    time: z.string().min(1, {
        message: "The time is required."
    })
})

export const BookATableForm = () => {
    const formRef = useRef(null)
    const serviceId = process.env.NEXT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_APP_EMAILJS_TEMPLATE_ID
    const apiKey = process.env.NEXT_APP_EMAILJS_API_KEY

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          document: "",
          guests: "",
          time: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        toast(`${values.firstName} ${values.lastName} the book is reserved.`)
        form.reset({})
    }

    return (
        <div className="py-16">
            <Toaster  />
            <Form {...form}>
                <form
                    ref={formRef}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col justify-end items-end space-y-6 md:space-y-10 mx-auto w-[90%] md:w-[85%] lg:w-[70%] text-white"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        First name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="First name"
                                            className="bg-[#0F0F0F] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm text-[#555]" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        Last name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Last name"
                                            className="bg-[#0F0F0F] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm text-[#555]" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="document"
                            render={({ field: { onChange, ...props } }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                       Document or CNPJ
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...props}
                                            placeholder="Document or CNPJ"
                                            className="bg-[#0F0F0F] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                                            maxLength={18}
                                            onChange={(event) => {
                                                const { value } = event.target
                                                event.target.value = formatDocument(value)
                                                onChange(event)
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm text-[#555]" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                        <FormField
                            control={form.control}
                            name="guests"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        Number of guests
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="number"
                                            placeholder="Number of guests"
                                            min={2}
                                            max={10}
                                            className="bg-[#0F0F0F] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-sm text-[#555]" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        Pick a date
                                    </FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild className="w-full bg-[#0F0F0F] hover:bg-[#DCCA87] rounded-none">
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-start text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-3 h-[13px] w-[13px]" />
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0 bg-[#0F0F0F] text-white">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage className="text-sm text-[#555]" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        Select the time 
                                    </FormLabel>
                                    <Input
                                        {...field}
                                        type="time"
                                        className="bg-[#0F0F0F] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                                    />
                                    <FormMessage className="text-sm text-[#555]" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            variant="ghost"
                            className="bg-[#DCCA87] hover:bg-[#DCCA87] hover:opacity-85 rounded-none text-black"
                        >
                            Book a table for a special date
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}