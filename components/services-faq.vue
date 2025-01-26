<template>
    <div class="w-full bg-white">
        <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-14 lg:pb-20">
            <div class="py-6"></div>
            <h2 class="text-center w-full text-3xl lg:text-4xl 2xl:text-5xl font-semibold">Frequently asked questions
                <br>
                about EQ Analysis
            </h2>

            <div class="w-full">
                <AccordionRoot class="bg-mauve6 w-full text-xl mt-14 rounded-md shadow-[0_2px_10px] shadow-black/5"
                    default-value="item-1" type="single" :collapsible="false">
                    <template v-for="item in accordionItems" :key="item.value">
                        <AccordionItem
                            class="focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
                            :value="item.value">
                            <AccordionHeader class="flex">
                                <AccordionTrigger
                                    class="text-grass11 shadow-mauve6 hover:bg-mauve2 flex flex-1 cursor-default items-center justify-between bg-white px-5 font-semibold py-5 leading-none shadow-[0_1px_0] outline-none group">
                                    <span>{{ item.title }}</span>
                                    <Icon icon="radix-icons:chevron-down"
                                        class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                        aria-label="Expand/Collapse" />
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent
                                class="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ">
                                <div class="px-5 py-4">
                                    {{ item.content }}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </template>
                </AccordionRoot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'

const accordionItems = [
    {
        value: 'item-1',
        title: 'What products do you offer?',
        content: 'We provide daily analysis reports for S&P 500 Futures, Crude Oil, Gold, Bitcoin, and US Treasury Notes - developed from our proprietary EQuilibrium models since 2003.',
    },
    {
        value: 'item-2',
        title: 'How often are reports updated?',
        content: 'Our team publishes new market briefings every trading morning, with intraday updates when volatility thresholds are breached.',
    },
    {
        value: 'item-3',
        title: 'Can I try before subscribing?',
        content: 'Yes! We offer a 7-day free trial with full access to all current market analyses and historical reports.',
    },
    {
        value: 'item-4',
        title: 'What markets do you cover?',
        content: 'We analyze Equity Index Futures, Commodities, Cryptocurrencies, and Interest Rate products - focusing on CME Group derivatives and major crypto exchanges.',
    },
    {
        value: 'item-5',
        title: 'Do institutions use EQ Analysis?',
        content: 'Yes, our clients include hedge funds, prop trading firms, and former Chicago pit traders managing over $1B in assets under guidance from our reports.',
    },
]

</script>