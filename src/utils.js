import moment from "moment"

export const analyze = (text) => {
    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi, How can i help you?'
    else if(text.includes('date'))
        return moment().format('MMM Do YYYY')
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if (text.includes('google link'))
        return 'https://www.googlr.com'
    else if(text.includes('interest'))
        return 'Bank interest rate is 8.7'
    else if(text.includes('thank you'))
        return 'Thanks for contacting us. Have a nice day'
    return "I can't get you. Can you rephrase the message?"
}

// export const model = {
//     intents: ["hello", "hi", "hey"],
//     bye: ["goodbye", "bye", "see you", "ok", "thanks", "thank you"],
//     productInquiry: ["latest products", "new arrivals", "newest arrivals"],
//     orderTracking: [
//         "placed order",
//         "order status",
//         "check order",
//         "order track",
//         "order tracking",
//         "track",
//     ],
//     shippingInformation: [
//         "delivery date",
//         "order arrive",
//         "delivery time",
//         "order arrival",
//     ],
//     returnPolicy: ["return policy", "return item", "return items"],
//     promotions: [
//         "discounts available",
//         "current promotions",
//         "any discounts",
//         "discount",
//         "offers",
//     ],
//     paymentMethods: [
//         "payment method",
//         "payment option",
//         "accept payment",
//         "pay order",
//         "payment type",
//     ],
//     orderModification: ["modify oredr", "change address"],
//     accountManagement: [
//         "update accounts",
//         "change account dstails",
//         "update address",
//         "update email",
//     ],
//     addressChange: [
//         "change delivery address",
//         "update shippinng address",
//         "change shipping address",
//     ],
//     cancelOrder: ["cancel order", "cancel"],
//     deliveryTime: [
//         "delivery time",
//         "order delivery",
//         "expect order",
//     ],
//     contactInformation: [
//         "contact customer support",
//         "customer service contact",
//         "customer support",
//         "contact us",
//         "contact support",
//     ],
//     feedbackSubmission: ["feedback", "provide feedback", "submit feedback"],
// }
// responses: {
//     hello: [
//         { answer: "Hello! How can I assist you today?" },
//         { answer: "Hey there! How can I help you?" },
//         { answer: "What can I do for you?" },
//     ]
//     bye: [
//         { answer: "Goodbye! Have a great day!" },
//     ]
//     productInquiry: [
//         { answer: "Sure! Here are our latest products:" },
//     ]
//     orderTracking: [
//         {
//             answer: "Of course! Please provide me with your order number, and I'll check the status for you.", 
//         },
//     ]
//     shippingInformation: [
//         { answer: "I can help you with that. Could you give me your order number or tracking ID?"

//         }
//     ]
//     returnPolicy: [
//         {
//             "Our return policy allows you to return items within 7 days of purchase for a full refund."
//         }
//     ]
//     promotions: [
//         {
//             answer: "Yes, we currently have promotions running. Would you like to know more?",
//         },
//     ]
// }