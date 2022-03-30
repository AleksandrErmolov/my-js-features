import type {NextPage} from 'next'
import Head from 'next/head'
import Grid from "../src/components/Grid/Grid";
import SliderOnePicture from "../src/components/SliderOnePicture/SliderOnePicture";


const Home: NextPage = () => {


    return (
        <Grid>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <SliderOnePicture/>
        </Grid>
    )
}

export default Home
