import { useEffect, useState } from "react"
import { useTheme } from "../hooks/ThemeProvider";
import Logo from '../assets/svg/Logo_one'
import { ChevronDown } from "lucide-react";
import { servicesMenuData } from "../utils/servicesMenuData";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [openService, setOpenService] = useState(false)
    let getMenu = servicesMenuData;
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'backdrop-blur-[20px] bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(10,10,15,0.8)] border-b border-[#E8E8F0] dark:border-[#1C1C28]'
            : 'bg-transparent'
            } border-b border-[#E8E8F0] dark:border-[#1C1C28]`}
            style={{ fontFamily: 'var(--font-body)' }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* logo */}
                <div className="flex items-center cursor-pointer" onClick={() => {
                    navigate("/")
                }} >
                    <Logo />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenService(true)}

                    >
                        <a
                            href="#services"

                            className="flex items-center gap-2 text-[#5A5A7A] dark:text-[#8888A8] hover:text-[#2664eb] dark:hover:text-[#2664eb] transition-colors duration-300"
                        >
                            <span>Services</span>

                            <ChevronDown
                                className={`transition-transform duration-300 ${openService ? "rotate-180" : ""
                                    }`}
                            />
                        </a>
                        {
                            openService && (
                                <div
                                    onMouseEnter={() => setOpenService(true)}
                                    onMouseLeave={() => setOpenService(false)}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1  w-250 dark:bg-gray-950 bg-white rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-50">
                                    <h1 className="border-b border-gray-200 dark:border-gray-700 pb-2 text-xl font-bold text-[#2664EB]">Our Services</h1>
                                    <div className="grid grid-cols-3 gap-y-4 p-2">
                                        {
                                            getMenu?.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="group relative flex items-start gap-3 w-50 cursor-pointer p-2 rounded-md transition-all duration-300
                                                     hover:bg-[#2664EB]/30  hover:shadow-xl"
                                                    onClick={() => navigate(`/services/${item.slug}`, { state: { slug: item?.slug } })}
                                                >
                                                    <span
                                                        className="absolute left-0 top-1/2 -translate-y-1/2  h-20 w-1 text-center bg-[#2664EB] opacity-0 group-hover:opacity-100 transition-opacity"
                                                    />
                                                    <span
                                                        className="bg-gray-300 p-2 rounded-md transition-all duration-300 group-hover:bg-white"
                                                    >
                                                        <item.icon
                                                            className="text-gray-700 transition-colors duration-300 group-hover:text-[#2664EB]"
                                                        />
                                                    </span>

                                                    <div>
                                                        <a
                                                            className=" font-bold text-sm text-gray-700 dark:text-white transition-colors duration-300 group-hover:text-[#2664EB]"
                                                        >
                                                            {item.title}
                                                        </a>

                                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <button
                        onClick={() => navigate("/#portfolio")}
                        className="text-[#5A5A7A] dark:text-[#8888A8]"
                    >
                        Portfolio
                    </button>
                    <button onClick={() => navigate("/#pricing")} className="text-[#5A5A7A] dark:text-[#8888A8] hover:text-[#2664eb] dark:hover:text-[#2664eb] transition-colors duration-300">
                        Pricing
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-lg bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] flex items-center justify-center hover:border-[#2664eb] transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5 text-[#2664eb]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-[#2664eb]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    <a
                        href="tel:+919500191182"
                        className="px-6 py-3 bg-[#2664eb] text-white rounded-lg hover:bg-[#5B4CD6] dark:hover:bg-[#7D6EF0] transition-all duration-300 hidden md:block"
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </nav>
    )
}