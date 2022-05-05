/* eslint-disable @next/next/no-sync-scripts */
// pages/_document.js
import React from "react";
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

type Props = {}

export default class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
    }
    render() {
        return (
            <Html className='gray-50 dark:bg-black'>
            <Head>
                <meta name='description' content='Calculate your upcoming Ethereum consensus duties' />
                <link rel='icon' href='/favicon.ico' />
                <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
                <script src='noflash.js' />
            </Head>
            <body className='gray-50 dark:bg-black'>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
}
