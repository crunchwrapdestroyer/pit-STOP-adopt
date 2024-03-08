import { React } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CHECKOUT = gql`
    query Query {
        createCheckoutSession
    }
`
function CheckoutButton() {
    
    const [startCheckout, { loading, error, data }] = useLazyQuery(CHECKOUT, {
        onCompleted: (queryData) => {
            console.log(queryData);
            let data = JSON.parse(queryData.createCheckoutSession);
            let checkoutUrl = data.url
            window.location.assign(checkoutUrl); // '{ url: "STIPEURL.com"}'
            // console.log(checkoutUrl)
        }
    });

    

    if (loading) return null;
    if (error) return `Error! ${error}`
    // console.log(data);

    return (
        < button onClick={() => {startCheckout ()}}>
            Donate
        </button>
    )
    
    }
        export default CheckoutButton