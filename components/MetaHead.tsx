import Head from 'next/head'
import { info } from "../data/info";
import { useTheme } from "next-themes";

import { useRouter } from 'next/router';

function MetaHead(props: { title: any; description: any; ogImageUrl: any; }) {
    const { title, description, ogImageUrl } = props;
    const router = useRouter()
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            {currentTheme === 'dark' ?
                <meta name="theme-color" content="#1e293b" /> :
                <meta name="theme-color" content="#ffffff" />
            }



            {
                title && (
                    <link rel="canonical" href={`${info.baseUrl}${router.pathname}`} />
                )
            }
            {title && <title>{`${title} - ${info.name}`}</title>}
            {title && <meta name="title" content={`${title} - ${info.name}`} />}
            {description && <meta name="description" content={description} />}

            {title && <meta property="og:type" content="website" />}
            {
                title && (
                    <meta property="og:url" content={`${info.baseUrl}${router.pathname}`} />
                )
            }
            {title && <meta property="og:title" content={`${title} - ${info.name}`} />}
            {description && <meta property="og:description" content={description} />}
            {
                ogImageUrl && (
                    <meta property="og:image" content={`${info.baseUrl}${ogImageUrl}`} />
                )
            }

            {title && <meta property="twitter:card" content="summary_large_image" />}
            {
                title && (
                    <meta
                        property="twitter:url"
                        content={`${info.baseUrl}${router.pathname}`}
                    />
                )
            }
            {title && <meta property="twitter:title" content={`${title} - ${info.name}`} />}
            {description && <meta property="twitter:description" content={description} />}
            {
                ogImageUrl && (
                    <meta property="twitter:image" content={`${info.baseUrl}${ogImageUrl}`} />
                )
            }
        </Head>
    )
}

export default MetaHead