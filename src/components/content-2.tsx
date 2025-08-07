"use client"

import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Faundy empowers real growth with interactive tools.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-body">
                           Faundy is more than just a productivity app. <span className="text-title font-medium">it’s an interactive experience that helps individuals</span> — empowers real growth.
                        </p>
                        <p>It combines habit tracking, personalized guidance, and team analytics into a unified system that adapts to your growth.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Interactive</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Engage with your goals in real time through AI-powered suggestions, dynamic surveys, and daily workflows.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Intelligent</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Faundy learns from your routines and delivers tailored paths to improvement — built on real behavior data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/charts.png" className="hidden rounded-[12px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/charts-light.png" className="rounded-[12px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
