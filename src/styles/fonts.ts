import { Chakra_Petch, Jersey_10 } from 'next/font/google';
import localFont from 'next/font/local';

export const chakrapetch = Chakra_Petch({
    variable: '--font-chakra-petch',
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin', 'latin-ext', 'thai']
});

export const jersey10 = Jersey_10({
    variable: '--font-jersey-10',
    weight: ['400'],
    display: 'swap'
});

export const actay = localFont({
    src: [
        {
            path: '/fonts/Actay-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '/fonts/Actay-RegularItalic.otf',
            weight: '400',
            style: 'italic'
        },
        {
            path: '/fonts/ActayWide-Bold.otf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '/fonts/ActayWide-BoldItalic.otf',
            weight: '700',
            style: 'italic'
        }
    ],
    variable: '--font-actay',
    display: 'swap'
});