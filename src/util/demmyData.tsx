import { link } from "fs";
import Shopify from "../../public/images/shopify.png";
import Stripe from "../../public/images/Stripe_Logo.png";
import Slack from "../../public/images/Slack.png";
import Zoom from "../../public/images/Zoom.png";
import tablist from "../../public/images/tablist.png";

export type HeaderMenu = {
  id: string;
  nav: string;
  link: string;
};
export const headerMenu: HeaderMenu[] = [
  {
    id: "1",
    nav: "Home",
    link: "",
  },
  {
    id: "2",
    nav: "About",
    link: "",
  },
  {
    id: "3",
    nav: "Features",
    link: "",
  },
  {
    id: "4",
    nav: "Pricing",
    link: "",
  },
  {
    id: "5",
    nav: "Integrations",
    link: "",
  },
  {
    id: "6",
    nav: "Resources",
    link: "",
  },
];

export const trustedCompanies = [
  { id: "1", img: Shopify, altText: "Shopify" },
  { id: "2", img: Stripe, altText: "Stripe" },
  { id: "3", img: Slack, altText: "Slack" },
  { id: "4", img: Zoom, altText: "Zoom" },
];

export const tabData = [
  {
    id: 1,
    eventKey:`ticket-list`,
    title:`Ticket list`,
    image: tablist,
    bodyTitle: `Monitor and Respond to All Incoming Tickets`,
    paragraph: `View, organize, and manage all your customer support
                      tickets from a single, unified dashboard. Track new
                      issues, follow up on pending requests, and close resolved
                      cases with ease. With filters, real-time updates, and
                      intuitive tools, MindDesk helps you stay responsive and
                      build lasting customer trust.`,
  },
  {
    id: 2,
    eventKey:`ticket-view`,
    title:`Ticket view`,
    image: tablist,
    bodyTitle: `Monitor and Respond to All Incoming Tickets`,
    paragraph: `View, organize, and manage all your customer support
                      tickets from a single, unified dashboard. Track new
                      issues, follow up on pending requests, and close resolved
                      cases with ease. With filters, real-time updates, and
                      intuitive tools, MindDesk helps you stay responsive and
                      build lasting customer trust.`,
  },
  {
    id: 3,
    eventKey:`automations`,
    title:`automations`,
    image: tablist,
    bodyTitle: `Monitor and Respond to All Incoming Tickets`,
    paragraph: `View, organize, and manage all your customer support
                      tickets from a single, unified dashboard. Track new
                      issues, follow up on pending requests, and close resolved
                      cases with ease. With filters, real-time updates, and
                      intuitive tools, MindDesk helps you stay responsive and
                      build lasting customer trust.`,
  },
  {
    id: 4,
    eventKey:`settings`,
    title:`settings`,
    image: tablist,
    bodyTitle: `Monitor and Respond to All Incoming Tickets`,
    paragraph: `View, organize, and manage all your customer support
                      tickets from a single, unified dashboard. Track new
                      issues, follow up on pending requests, and close resolved
                      cases with ease. With filters, real-time updates, and
                      intuitive tools, MindDesk helps you stay responsive and
                      build lasting customer trust.`,
  },
];


export const faqData = [
    {
      id: 1,
       
      accordionHeader: `What is a FlockDesk?`,
      title: `How does a FlockDesk work?`,
      paragraph: `A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.`,
    },
    {
      id: 1,
       
      accordionHeader: `Does FlockDesk provide 24/7 support?`,
      title: `How does a FlockDesk work?`,
      paragraph: `A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.`,
    },
    {
      id: 1,
       
      accordionHeader: `How does FlockDesk handle tickets?`,
      title: `How does a FlockDesk work?`,
      paragraph: `A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.`,
    },
    {
      id: 1,
       
      accordionHeader: `Is FlockDesk software safe?`,
      title: `How does a FlockDesk work?`,
      paragraph: `A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.`,
    },
    {
      id: 1,
       
      accordionHeader: `What's the price of FlockDesk`,
      title: `How does a FlockDesk work?`,
      paragraph: `A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.`,
    },
    {
      id: 1,
       
      accordionHeader: `Does FlockDesk software have any integrations?`,
      title: `How does a FlockDesk work?`,
      paragraph: `A help desk system like MindDesk manages support requests—known as tickets—submitted by users through channels such as email, phone, or online forms. When users encounter specialized issues or need assistance, they reach out, and MindDesk automatically organizes and prioritizes these tickets based on urgency and issue type. The system assigns each ticket to the right support agent or team, ensuring quick and accurate resolution. Throughout the process, MindDesk keeps users updated on ticket status and progress with clear, timely communication. Once the issue is resolved, MindDesk provides the solution to the user and closes the ticket, delivering a smooth, efficient support experience.`,
    },
  ];