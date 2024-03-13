"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const formSchema = z.object({
    name:
        z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value), 'Name should contain only alphabets.'),
    document:
        z
        .string()
        .min(14, { message: "Document must be at least 14 characters." })
        .refine((value) => /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value), "Document does not follow the pattern."),
    gender:
        z
        .string()
        .min(2, { message: "Gender must be at least 2 characters." }),
    phone:
        z
        .string()
        .min(1, { message: "Phone must be at least 2 characters." })
        .refine((value) => /^((\(\d{3}\) ?)|(\d{3}[-\s]))?\d{3}[-\s]\d{4}$/.test(value), "Phone does not follow the pattern."),
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
            name: "",
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
        console.log(values)
    }

    return (
        <div className="mx-auto py-20 md:py-0 p-4 w-[90%] md:w-[90%] xl:w-[70%]">
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-white">
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
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-white">
                                            Document
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Document"
                                                className="bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                {...field}
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
                                        <FormLabel className="text-white">
                                            Gender
                                        </FormLabel>
                                        <Select>
                                            <SelectTrigger className="peer pt-6 focus:ring-0 border-none outline-none p-2 w-full focus:border-none focus:outline-none rounded-none focus:ring-offset-0 hover:ring-offset-0 text-sm bg-[#090909] text-gray-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                                                <SelectValue placeholder="Gender" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#090909] text-gray-500 border-none">
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Gender
                                                    </SelectLabel>
                                                    <SelectItem value="men">
                                                        Men
                                                    </SelectItem>
                                                    <SelectItem value="women">
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
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-white">
                                            Phone
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phone (999) 999-9999"
                                                max={100}
                                                className="bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                {...field}
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
                                        <FormLabel className="text-white">
                                            E-mail
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E-mail"
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
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-white">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    className="pr-12 bg-[#090909] border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-white"
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleShowOrHidePassword}
                                                    className="p-0 m-0 absolute top-[50%] right-3 translate-y-[-50%]"
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
                            className="px-10 text-black bg-[#DCCA87] hover:bg-[#DCCA87] rounded-none"
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