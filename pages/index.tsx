import Head from "next/head";
import { useEffect } from "react";

function Index() {
    useEffect(() => {
        window.location.href =
            "https://dsc.gg/silentclient";
    }, []);

    return (
        <>
            <Head>
                <title>Silent Client Support</title>
            </Head>
        </>
    );
}

export default Index;
