'use client'

import React, { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const ContactUs = (props: Props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formIsSubmitting, setFormIsSubmitting] = useState(false)

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setFormIsSubmitting(true);
        event.preventDefault()

        try {
            const formData = new FormData(event.currentTarget)
            const body = Object.fromEntries(formData);

            const response = await fetch('/api/sendmail', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(body),
            })
            if (!response.ok) {
                throw new Error();
            }
            toast("Message sent successfully :)");
            formRef.current?.reset();
        } catch (error) {
            toast.error("Something went wrong, please try again :(")
        }
        setFormIsSubmitting(false);
    }

    return (
        <div className="py-8 lg:py-10 text-left px-4 mx-auto max-w-screen-md">
            <form ref={formRef} onSubmit={(e) => onSubmit(e)} className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email
                    </label>
                    <input
                        name="from"
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="info@codikodev.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Subject
                    </label>
                    <input

                        name="subject"
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Your message
                    </label>
                    <textarea
                        name="text"
                        id="message"
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className={`btn btn-blue font-normal ${formIsSubmitting ? "cursor-wait opacity-70" : ""}`}
                >
                    Send message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
