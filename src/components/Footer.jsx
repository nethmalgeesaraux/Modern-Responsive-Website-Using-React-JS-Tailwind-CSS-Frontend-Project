import React from "react";
import assets from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";

export const Footer = () => {
    const onSubscribe = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "9ab1fee5-4ec9-44ca-8f5e-7452e497230e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Subscribed successfully ");
                event.target.reset();
            } else {
                toast.error("Subscription failed ");
            }
        } catch {
            toast.error("Error sending subscription ");
        }
    };

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 sm:px-12 lg:px-24 xl:px-40 py-12">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="flex flex-col md:flex-row justify-between gap-10">
                {/* Left side */}
                <div className="flex flex-col gap-6 max-w-md">
                    <div className="flex items-center gap-3">
                        <img src={assets.logo} alt="Agency Logo" className="w-50 h-10" />
                    </div>
                    <p className="text-sm opacity-80">
                        From strategy to execution, we craft digital solutions that move your business forward.
                    </p>
                    <nav className="flex gap-5 text-sm font-medium">
                        <a href="#" className="hover:text-primary">Home</a>
                        <a href="#services" className="hover:text-primary">Services</a>
                        <a href="#our-work" className="hover:text-primary">Our work</a>
                        <a href="#testimonial" className="hover:text-primary">Testimonial</a>
                    </nav>
                </div>

                {/* Right side - Newsletter */}
                <div className="flex flex-col gap-4 max-w-md">
                    <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
                    <p className="text-sm opacity-80">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>
                    <form onSubmit={onSubscribe} className="flex gap-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 outline-none text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:scale-105 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 gap-4">
                <p className="text-xs">
                    Copyright 2025 © agency.ai - All Right Reserved.
                </p>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/nethmal.geesara.3"><img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5" /></a>
                    <a href="https://x.com/GeesaraNe84357"><img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5" /></a>
                    <a href="https://www.instagram.com/?lsrc=cisso"><img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/feed/"><img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};
