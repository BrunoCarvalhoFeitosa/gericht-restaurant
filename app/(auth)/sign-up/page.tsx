"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formatDocument } from "@/utils/format-document"
import { formatPhone } from "@/utils/format-phone"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const formSchema = z.object({
    completeName:
        z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .refine((value) => /^[a-zA-Z]+[-"s]?[a-zA-Z ]+$/.test(value), "Name should contain only alphabets."),
    document:
        z
        .string()
        .min(14, { message: "Document must be at least 14 characters." }),
    gender:
        z
        .string()
        .min(1, { message: "Gender must be at least 1 character." })
        .optional(),
    phone:
        z
        .string()
        .min(11, { message: "Phone must be at least 11 characters." }),
    email:
        z
        .string()
        .max(80, { message: "E-mail must be max 80 characters." })
        .refine((value) => /^([a-zA-Z0-9_\-\.]+)*(\+[a-z0-9-]+)?@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value), "E-mail does not follow the pattern."),
    password:
        z
        .string()
        .min(2, { message: "Password must be at least 2 characters." })
})

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            completeName: "",
            document: "",
            gender: "",
            phone: "",
            email: "",
            password: "",
        },
    })

    const handleShowOrHidePassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        form.reset({})
        toast.success(`${values.completeName} your registration was successful.`, {
            unstyled: true,
            duration: 5000,
            classNames: {
                error: "p-3 flex items-center gap-x-3 rounded-md text-sm border border-black bg-red-400",
                info: "p-3 flex items-center gap-x-3 rounded-md text-sm border border-black bg-blue-400",
                success: "p-3 flex items-center gap-x-3 rounded-md text-sm text-white border border-black bg-zinc-950",
                warning: "p-3 flex items-center gap-x-3 rounded-md text-sm border border-black bg-orange-400",
            }
        })
    }

    return (
        <div className="mx-auto py-20 md:py-0 p-4 w-[90%] md:w-[90%] xl:w-[70%]">
            <Toaster />
            <div>
                <Link href="/">
                    <Image
                        src="/svg/logo.svg"
                        width="200"
                        height="40"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="mt-14">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-white">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <FormField
                                control={form.control}
                                name="completeName"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>
                                            Complete name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Complete name"
                                                className="bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-sm text-[#222]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="document"
                                render={({ field: { onChange, ...props } }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>
                                            Document
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...props}
                                                placeholder="Document"
                                                className="bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                maxLength={18}
                                                onChange={(event) => {
                                                    const { value } = event.target
                                                    event.target.value = formatDocument(value)
                                                    onChange(event)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-sm text-[#222]" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>
                                            Gender
                                        </FormLabel>
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger className="peer pt-6 focus:ring-0 border-none outline-none p-2 w-full focus:border-none focus:outline-none rounded-none focus:ring-offset-0 hover:ring-offset-0 text-sm bg-[#090909] text-gray-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                                                <SelectValue placeholder="Gender" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#090909] text-gray-500 border-none">
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Gender
                                                    </SelectLabel>
                                                    <SelectItem value="Men">
                                                        Men
                                                    </SelectItem>
                                                    <SelectItem value="Women">
                                                        Women
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-sm text-[#222]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field: { onChange, ...props } }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>
                                            Phone
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...props}
                                                maxLength={15}
                                                placeholder="Phone (999) 999-9999"
                                                className="bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                onChange={(event) => {
                                                    const { value } = event.target
                                                    event.target.value = formatPhone(value)
                                                    onChange(event)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-sm text-[#222]" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>
                                            E-mail
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="E-mail"
                                                className="bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-sm text-[#222]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    {...field}
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    className="pr-12 bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleShowOrHidePassword}
                                                    className="p-0 m-0 absolute top-[50%] right-3 translate-y-[-50%] outline-none"
                                                >
                                                    {showPassword ? (
                                                        <EyeOffIcon
                                                            className="w-5 h-5 text-gray-500"
                                                        />
                                                    ) : (
                                                        <EyeIcon
                                                            className="w-5 h-5 text-gray-500"
                                                        />
                                                    )}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-sm text-[#222]" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-end">
                            <Link href="/sign-in" className="text-sm underline text-white">
                                Have an account? Sign in
                            </Link>
                        </div>
                        <Button
                            variant="ghost"
                            type="submit"
                            className="px-10 text-black bg-[#DCCA87] outline-none hover:bg-[#DCCA87] hover:opacity-85 duration-300 rounded-none"
                        >
                            Sign up on restaurant
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SignUpPage