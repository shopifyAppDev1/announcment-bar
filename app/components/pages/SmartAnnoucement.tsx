import { Button, Layout, Page } from '@shopify/polaris';


export default function SmartAnnoucement (){
     return (
       <Page>
         <Layout.Section>
           {/*  When don't have create any announcement bar  */}
           <Layout >
             <Button>Create Annoucement</Button>
           </Layout>

         </Layout.Section>
       </Page>
     );
}