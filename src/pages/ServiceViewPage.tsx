import { useNavigate, useParams } from "react-router-dom";
import { servicesData } from "../utils/servicesData";
import { useState } from "react";
import type { ServicesInterface } from "../interfaces/servicesMenuInterface";
import { ArrowRight, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import aboutImg from "../assets/about-us.png"

export default function ServiceViewPage() {

    const { slug } = useParams();
    const [getData, _setData] = useState<ServicesInterface[]>(servicesData)
    const filterData = getData.filter((item) => item.slug === slug)

    return (
        <section className="pt-20 min-h-screen">
            {
                filterData?.map((item) => (
                    <div key={item?.id} className="space-y-4">
                        <div className="relative h-[35vh] min-h-70 overflow-hidden bg-linear-to-br from-[#0A0A0F] via-[#132B5E] to-[#2664EB]">

                            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                                <span className="mb-4 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium text-blue-100">
                                    Our Premium Service
                                </span>

                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                                    {item?.title}
                                </h1>

                                <p className="max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed">
                                    {item?.subtitle}
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
                        </div>
                        <section className="py-20 px-6">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid lg:grid-cols-2 gap-16 items-center">

                                    {/* Image Section */}
                                    <div className="relative group">
                                        <div className="absolute -inset-3 bg-gradient-to-r from-[#2664EB] to-[#5B8DEF] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500" />

                                        <img
                                            src={item?.image}
                                            alt={item?.title}
                                            className="relative w-full h-112.5 opacity-80 object-cover rounded-3xl shadow-2xl"
                                        />

                                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3">
                                            <p className="text-blue-800 font-semibold">
                                                Starting From
                                            </p>
                                            <h3 className="text-2xl font-bold text-black    ">
                                                {item?.price}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div>
                                        <span className="inline-block px-4 py-2 rounded-full bg-[#2664EB]/10 text-[#2664EB] font-medium mb-4">
                                            {item?.tagline}
                                        </span>

                                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A2E] dark:text-white leading-tight mb-6">
                                            {item?.title}
                                        </h2>

                                        <p className="text-lg text-[#5A5A7A] dark:text-[#A0A0B8] leading-relaxed mb-8">
                                            {item?.longDescription}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                            {item?.points?.slice(0, 4).map((point, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-[#2664EB]/10 flex items-center justify-center">
                                                        ✓
                                                    </div>

                                                    <span className="text-[#5A5A7A] dark:text-[#A0A0B8]">
                                                        {point}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            <button className="px-8 py-2 cursor-pointer  bg-[#2664EB] text-white rounded-xl font-semibold hover:bg-[#1E52D1] transition-all duration-300 hover:scale-105">
                                                {item?.ctaText}
                                            </button>

                                            <button className="px-8 py-2 border cursor-pointer   border-[#2664EB] text-[#2664EB] rounded-xl font-semibold hover:bg-[#2664EB] hover:text-white transition-all duration-300">
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-300 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-950">
                            {item?.stats?.map((stats, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center justify-center py-6 px-4 text-center transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800
                                         `}
                                >
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {stats?.value}
                                    </h3>
                                    <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {stats?.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="py-16">
                            {/* Section Header */}
                            <div className="text-center max-w-3xl mx-auto mb-14">
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium">
                                    What We Do
                                </span>

                                <h2 className="mt-4 text-3xl md:text-5xl font-bold dark:text-white">
                                    End-to-End Performance Solutions
                                </h2>

                                <p className="mt-4 text-gray-600 dark:text-gray-400">
                                    Everything you need to launch, grow, and optimize your business with
                                    professional services tailored to your goals.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-2">
                                {item?.includes?.map((value, index) => {
                                    const Icon = value.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            {/* Icon */}
                                            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                                <Icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                {value.label}
                                            </h4>
                                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                {value.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="bg-linear-to-b from-blue-800 via-blue-700 to-blue-500  py-16 px-6 lg:px-12">
                            {/* Header */}
                            <div className="text-center mb-14">
                                <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur">
                                    Our Process
                                </span>

                                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                                    How We Drive Results
                                </h2>

                                <p className="mt-4 max-w-2xl mx-auto text-blue-100">
                                    A streamlined process designed to deliver consistent results and
                                    exceptional experiences from start to finish.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 relative">
                                {item?.process?.map((process, index) => {
                                    const Icon = process.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="relative group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
                                        >
                                            {/* Step Number */}
                                            <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-blue-700 flex items-center justify-center text-sm font-bold shadow-lg">
                                                {index + 1}
                                            </div>

                                            {/* Icon */}
                                            <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                                                <Icon className="h-7 w-7 text-white" />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-xl font-semibold text-white mb-3">
                                                {process.label}
                                            </h3>

                                            <p className="text-sm leading-relaxed text-blue-100">
                                                {process.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="py-16">
                                    {/* Section Header */}
                                    <div className="text-center mb-12">
                                        <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                                            Why Choose Us
                                        </span>

                                        <h2 className="mt-4 text-3xl md:text-5xl font-bold dark:text-white">
                                            Benefits of Working With Us
                                        </h2>

                                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                            We combine expertise, innovation, and dedication to help your business
                                            achieve measurable growth and long-term success.
                                        </p>
                                    </div>

                                    {/* Content */}
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                                        {/* Image */}
                                        <div className="flex justify-center">
                                            <img
                                                src={aboutImg}
                                                alt="Why Choose Us"
                                                className="w-full max-w-xl object-contain drop-shadow-2xl"
                                            />
                                        </div>

                                        {/* Benefits */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {item?.benefits?.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="group p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="shrink-0 h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                            <ShieldCheck className="h-6 w-6 text-blue-600" />
                                                        </div>

                                                        <div>
                                                            <p className="text-gray-600 text-xl dark:text-gray-400">
                                                                {benefit}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="relative bg-blue-600 overflow-hidden min-h-125 md:min-h-150 lg:min-h-120">
                            <div className="absolute inset-0 opacity-20 bg-dots"></div>
                            <div className="relative z-10 px-8 py-12 lg:px-16">
                                <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
                                    <div>
                                        <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur">
                                            Let's Work Together
                                        </span>

                                        <h2 className="mt-5 text-4xl lg:text-6xl font-bold text-white leading-tight">
                                            Ready to Grow Your Business?
                                        </h2>

                                        <p className="mt-5 text-lg text-blue-100 max-w-2xl leading-relaxed">
                                            We combine creativity, technology, and strategy to deliver
                                            exceptional digital solutions that help businesses grow and succeed.
                                        </p>

                                        <div className="mt-8 flex gap-4 flex-wrap">
                                            <button
                                                className="group flex items-center gap-3 px-7 py-3 rounded-full bg-white text-blue-700 font-semibold 
                                                hover:scale-105 transition-all duration-300 cursor-pointer"
                                            >
                                                <span>Get Free Consultation</span>

                                                <ArrowRight
                                                    className="group-hover:translate-x-1 transition-transform"
                                                    size={18}
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="border border-gray-200 p-4 rounded-md shadow-xl "
                                    >
                                        <h3 className="text-2xl font-semibold text-white mb-2">
                                            Let's Talk
                                        </h3>
                                        <div className="space-y-4 flex flex-col items-start">
                                            <div className="flex items-center gap-4 ">
                                                <Phone className="h-6 w-6 text-white" />
                                                <div>
                                                    <h4 className="text-white font-medium">
                                                        +91 95001 91182
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 ">
                                                <Mail className="h-6 w-6 text-white" />
                                                <div>
                                                    <h4 className="text-white font-medium">
                                                        mithtag@gmail.com
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <MessageCircle className="h-6 w-6 text-white" />
                                                <div>

                                                    <h4 className="text-white font-medium">
                                                        Quick Response Available
                                                    </h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}