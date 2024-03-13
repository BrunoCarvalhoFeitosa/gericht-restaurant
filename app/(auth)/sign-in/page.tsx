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
import { EyeIcon, EyeOffIcon } from "lucide-react"

const formSchema = z.object({
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

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
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
        <div className="mx-auto p-4 w-[90%] md:w-[90%] xl:w-[70%]">
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
                        <div className="flex justify-end">
                            <Link href="/sign-up" className="text-sm underline text-white">
                                Create your account
                            </Link>
                        </div>
                        <Button
                            variant="ghost"
                            type="submit"
                            className="px-10 text-black bg-[#DCCA87] hover:bg-[#DCCA87] rounded-none"
                        >
                            Sign in on restaurant
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SignInPage