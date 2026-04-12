import { useRef, useState, useEffect } from "react";
import "./styles/Work.css";
import MagicBento from "./MagicBento";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const BASE = '/The%20Work_webp';

const projects = [
{
    title: "Colossus Brand Promotion",
    category: "Visual Identity",
    tools: "Branding · Visuals · Print",
    cover: `${BASE}/Colossus%20-%20Branding/Cover.webp`,
    images: [
      `${BASE}/Colossus%20-%20Branding/26e670241699373.695e02ca1f1b9.webp`,
      `${BASE}/Colossus%20-%20Branding/7a0b8a241699373.695e02ca1eab3.webp`,
      `${BASE}/Colossus%20-%20Branding/9c9b93241699373.695e02ca1e4f5.webp`,
      `${BASE}/Colossus%20-%20Branding/aa3d58241699373.695e02ca1deff.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-02.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-03.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-05.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-06.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-07.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-08.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-09.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-10.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-11.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-12.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-13.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-14.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-15.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-16.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-17.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-18.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203-19.webp`,
      `${BASE}/Colossus%20-%20Branding/Campaign%203.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-01-01.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-01.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-07.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-08.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-09.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-10.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-11.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-12.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%201-14.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-02.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-04.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-05.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-06.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-07.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-14B.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-15.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-17.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-18-19.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202-25.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%202.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203-03.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203-16.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203-21.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203-22.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203-23.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203-24.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%203.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%20301.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign%204-27.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign-13.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign-15.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Campaign.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Post_2025-01.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Post_2025-02.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Post_2025-03.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Post_2025-04.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Smart%20LED%20Drivers%20and%20SMPS%20Ad%202-01.webp`,
      `${BASE}/Colossus%20-%20Branding/Colossus%20Smart%20LED%20Drivers%20and%20SMPS%20Ad%202-02.webp`,
      `${BASE}/Colossus%20-%20Branding/dff675241699373.695e02ca20545.webp`,
      `${BASE}/Colossus%20-%20Branding/fba15d241699373.695e02ca1f728.webp`,
      `${BASE}/Colossus%20-%20Branding/Post%202-02.webp`,
      `${BASE}/Colossus%20-%20Branding/Post%202-03.webp`,
      `${BASE}/Colossus%20-%20Branding/Post%202-04.webp`,
      `${BASE}/Colossus%20-%20Branding/Post%202-05.webp`,
      `${BASE}/Colossus%20-%20Branding/Post%202-06.webp`,
    ],
  },
  {
    title: "Plexilent: Branding",
    category: "Lighting Solutions",
    tools: "Campaign · Social Media · Visuals",
    cover: `${BASE}/Plexilent%20Campaign%205/Cover.webp`,
    images: [
      // Campaign 5
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-02.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-03.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-04.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-05.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-06.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-07.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-08.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-09.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205-12.webp`,
      `${BASE}/Plexilent%20Campaign%205/Plexilent%20Feature%20Campaign%205.webp`,
      // Campaign 4
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-02.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-07.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-08.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-09.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-10.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-12.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-13.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-14.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-15.webp`,
      `${BASE}/Plexilent%20Campaign%204/Plexilent%20Feature%20Campaign%204-16.webp`,
      // Campaign 3
      `${BASE}/Plexilent%20Campaign%203/Circadian%20Rhythm%20Post%203.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-04.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-08.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-09.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-10.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-12.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-13.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-14.webp`,
      `${BASE}/Plexilent%20Campaign%203/Plexilent%20Feature%20Campaign%203-15.webp`,
      // Campaign 2
      `${BASE}/Plexilent%20Campaign%202/Circadian%20Rhythm%20Post%202.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign%202-02.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign%202-04.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign%202-05.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign%202-06.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign%202.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign-14.webp`,
      `${BASE}/Plexilent%20Campaign%202/Plexilent%20Feature%20Campaign-19.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-04.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-05.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-06.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-07.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-08.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-09.webp`,
      `${BASE}/Plexilent%20Campaign%202/Post%202-10.webp`,
      // Campaign 1
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-01.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-02.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-03.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-12.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-13.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-15.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-16.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-17.webp`,
      `${BASE}/Plexilent%20Campaign%201/Plexilent%20Feature%20Campaign%201-18.webp`,
    ],
  },
  {
    title: "Plexilent Catalog (2025)",
    category: "Industrial Media",
    tools: "3D Product Catalog · Manufacturing · Print",
    cover: `${BASE}/Plexilent%20Catalog/Cover.webp`,
    images: [
      `${BASE}/Plexilent%20Catalog/1a77f1217683041.67948e5ddc97e.webp`,
      `${BASE}/Plexilent%20Catalog/230a47217683041.67948e5dda9c7.webp`,
      `${BASE}/Plexilent%20Catalog/8576ea217683041.67948e5dda239.webp`,
      `${BASE}/Plexilent%20Catalog/beeac2217683041.67948e5ddb112.webp`,
      `${BASE}/Plexilent%20Catalog/d39cbe217683041.67948e5ddc371.webp`,
      `${BASE}/Plexilent%20Catalog/db88ab217683041.67948e5ddd0c0.webp`,
    ],
  },
  {
    title: "light+ Middle East Expo, Dubai",
    category: "Event Branding",
    tools: "Brand Identity · Booth Design · Print",
    cover: `${BASE}/Dubai%20Expo%20%282025%29/Cover.webp`,
    images: [
      `${BASE}/Dubai%20Expo%20%282025%29/1c55b9217687023.6794a3f326312.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/33b4eb217688205.6794ab2377d1b.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/3d50db217688205.6794ab237a2b7.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/4665bb217688205.6794ab2379538.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/5e2890217687023.6794a3f322e3c.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/6e81bb217687023.6794a3f325452.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/7984be217688205.6794ab2379ddc.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/8b9cf3217688205.6794ab2378e58.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/9111f2217687023.6794a3f324d43.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/b7e513217687023.6794a3f323e07.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/bb6b72217687023.6794a3f322690.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/c2ce70217688205.6794ab23782b5.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/d1d054217687023.6794a3f323603.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/e35d76217687023.6794a3f325bc7.webp`,
      `${BASE}/Dubai%20Expo%20%282025%29/fe655f217688205.6794ab2378737.webp`,
    ],
  },
  {
    title: "Colossus Product Catalog (2025)",
    category: "Product Catalog",
    tools: "3D Visualization · E-commerce · Catalog",
    cover: `${BASE}/Colossus%20Product%20Catalog/Cover.webp`,
    images: [
      `${BASE}/Colossus%20Product%20Catalog/0979ff211031995.671b59af09c19.webp`,
      `${BASE}/Colossus%20Product%20Catalog/1de66b211031995.671b59af06ec0.webp`,
      `${BASE}/Colossus%20Product%20Catalog/21e4ba211031995.671b59af075f4.webp`,
      `${BASE}/Colossus%20Product%20Catalog/23881c211031995.671b59af094bf.webp`,
      `${BASE}/Colossus%20Product%20Catalog/9cd1ff211031995.671b59af08da6.webp`,
      `${BASE}/Colossus%20Product%20Catalog/b292b9211031995.671b59af0a35f.webp`,
      `${BASE}/Colossus%20Product%20Catalog/be094f211031995.671b59af0ac23.webp`,
      `${BASE}/Colossus%20Product%20Catalog/d804ca211031995.671b59af08671.webp`,
      `${BASE}/Colossus%20Product%20Catalog/dc000b211031995.671b59af07d3f.webp`,
    ],
  },
  {
    title: "Client:HDFC (2021)",
    category: "Financial Services",
    tools: "Brand Identity · Design · Print",
    cover: `${BASE}/Client%20-%20HDFC%20%282021%29/Cover.webp`,
    images: [
      `${BASE}/Client%20-%20HDFC%20%282021%29/02a3e6125788481.69c8334cb48d9.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/03ab0f125788481.6120004e91967.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/1b8d2e125788481.69c8334cb064b.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/27cc1c125788481.6120004e92596.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/3decb0125788481.69c8334cb1340.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/3e13d3125788481.69c8334cb656c.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/4a9af3125788481.69c8334cb02e8.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/4b81e1125788481.6120004e91f99.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/4b9134125788481.69c8334cb22da.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/514340125788481.69c8334cb3ba0.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/66b71b125788481.69c8334cb5c66.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/69f089125788481.69c8334cb60fa.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/77d638125788481.6120004e93ad0.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/77fba9125788481.6120004e92a8f.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/7d5dff125788481.6120004e9309b.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/818b0d125788481.69c8334cb0ecd.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/8605bf125788481.69c8334cb30a6.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/889b99125788481.69c8334cb0ad9.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/8b01f4125788481.69c8334caff1f.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/8c3864125788481.69c8334cb510a.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/8cb978125788481.69c8334cb58ab.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/8f4ac2125788481.69c8334cb1d69.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/93cafb125788481.69c8334cb6aaf.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/98526b125788481.69c8334cb2797.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/a0e3ec125788481.69c8334cb54e2.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/af8047125788481.69c8334cb4516.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/bee181125788481.69c8334cb40a1.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/cc12ef125788481.69c8334cb2b76.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/cd30da125788481.6120004e94145.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/d6becb125788481.6120004e9143c.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/dfd304125788481.69c8334cb3809.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/e97555125788481.69c8334cb4cd8.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/e98121125788481.69c8334cb1846.webp`,
      `${BASE}/Client%20-%20HDFC%20%282021%29/ffbffa125788481.6120004e936d6.webp`,
    ],
  },
  {
    title: "Client: Aptech (2021)",
    category: "Education & Training",
    tools: "Brand Identity · Print · Digital",
    cover: `${BASE}/Aptech/Cover.webp`,
    images: [
      `${BASE}/Aptech/03d178140658137.69c834bea8d5f.webp`,
      `${BASE}/Aptech/1d25e2140658137.62456fc237b82.webp`,
      `${BASE}/Aptech/2ea681140658137.62456fc235d45.webp`,
      `${BASE}/Aptech/336d61140658137.69c834bea85fb%20(1).webp`,
      `${BASE}/Aptech/336d61140658137.69c834bea85fb.webp`,
      `${BASE}/Aptech/4ba99c140658137.62456fc2368e7.webp`,
      `${BASE}/Aptech/8b77d8140658137.62456fc2372bd.webp`,
      `${BASE}/Aptech/8f48e5140658137.62456fc233a70.webp`,
      `${BASE}/Aptech/a01f92140658137.69c834bea820f.webp`,
      `${BASE}/Aptech/a04c08140658137.62456fc238791.webp`,
      `${BASE}/Aptech/a7153e140658137.62456fc2392fb.webp`,
      `${BASE}/Aptech/c821fe140658137.62456fc23a6d5.webp`,
      `${BASE}/Aptech/d8d05e140658137.62456fc23475c.webp`,
      `${BASE}/Aptech/fee83d140658137.69c834bea8996.webp`,
    ],
  },
  {
    title: "Client: Fitup Life (2019)",
    category: "Health & Fitness",
    tools: "Branding · App UI · Social Media",
    cover: `${BASE}/Fitup%20Life/Cover.webp`,
    images: [
      `${BASE}/Fitup%20Life/15b1fd78048919.5c99e2db3e90b.webp`,
      `${BASE}/Fitup%20Life/2d70f578050477.5c99ea7d4bd22.webp`,
      `${BASE}/Fitup%20Life/36444e78048919.5c99e2db3e507.webp`,
      `${BASE}/Fitup%20Life/3b813c78050477.5dce356e97fe3.webp`,
      `${BASE}/Fitup%20Life/4fd54778050477.5ca1fef7e4207.webp`,
      `${BASE}/Fitup%20Life/5333fb78050477.5ca1fef7e44a9.webp`,
      `${BASE}/Fitup%20Life/602e3878050477.5ca1fef7e3cda.webp`,
      `${BASE}/Fitup%20Life/8429f378050477.5c99ea7d4c201.webp`,
      `${BASE}/Fitup%20Life/8c3a5d78048919.5c99e2db3f95a.webp`,
      `${BASE}/Fitup%20Life/a0569178048919.5c99e2db403a5.webp`,
      `${BASE}/Fitup%20Life/ac9b3978048919.5c99e2db3f223.webp`,
      `${BASE}/Fitup%20Life/ae7ea178050477.5c99ea7d4b85e.webp`,
      `${BASE}/Fitup%20Life/cc79cc78048919.5cce9e531d240.webp`,
      `${BASE}/Fitup%20Life/dce01c78048919.5cce9e531de07.webp`,
      `${BASE}/Fitup%20Life/efeb0378048919.5c99e2db3ff55.webp`,
      `${BASE}/Fitup%20Life/f7501d78048919.5c99e2db3f683.webp`,
    ],
  },
  {
    title: "Everstar: Promotion",
    category: "Electronics & Tech",
    tools: "Visual Identity · Packaging · Digital",
    cover: `${BASE}/Everstar%20LED/Cover.webp`,
    images: [
      `${BASE}/Everstar%20LED/26cfa6196418831.661fa1aa2ca4a.webp`,
      `${BASE}/Everstar%20LED/3431c9217769781.67966d7424e5d.webp`,
      `${BASE}/Everstar%20LED/57b7d8196418831.661fa1aa2d2a5.webp`,
      `${BASE}/Everstar%20LED/776e9b217769781.67966d7426124.webp`,
      `${BASE}/Everstar%20LED/a6ef4d217769781.67966d742583e.webp`,
      `${BASE}/Everstar%20LED/ab7e41217769781.67966d7426e83.webp`,
      `${BASE}/Everstar%20LED/b0e301217769781.67966d7423e6e.webp`,
      `${BASE}/Everstar%20LED/c37344196418831.661fa1aa2c254.webp`,
      `${BASE}/Everstar%20LED/c94142196418831.661fa1aa2dc06.webp`,
      `${BASE}/Everstar%20LED/caf35a217769781.67966d7426920.webp`,
      `${BASE}/Everstar%20LED/f87688217769781.67966d7427664.webp`,
      `${BASE}/Everstar%20LED/fbc858217769781.67966d7424741.webp`,
    ],
  },
  {
    title: "Edelweiss: All Branding Collaterals",
    category: "Financial Services",
    tools: "Brand Identity · Design · Print",
    cover: `${BASE}/Edelweiss/Cover.webp`,
    images: [
      `${BASE}/Edelweiss/00251d106272885.5f8c7d8453fc2.webp`,
      `${BASE}/Edelweiss/19ce9f106272885.5f8c7d845029e.webp`,
      `${BASE}/Edelweiss/31e0d0106272885.612001a64e391.webp`,
      `${BASE}/Edelweiss/37032c106272885.5f8c7d844b676.webp`,
      `${BASE}/Edelweiss/3b8bc7106272885.5f8c7d844e36d.webp`,
      `${BASE}/Edelweiss/69305a106272885.612001a64e953.webp`,
      `${BASE}/Edelweiss/6aa4dc106272885.5f8c7d844d6d5.webp`,
      `${BASE}/Edelweiss/722686106272885.5f8c7d844b133.webp`,
      `${BASE}/Edelweiss/7e33b6106272885.5f8c7d844f09b.webp`,
      `${BASE}/Edelweiss/8fb362106272885.5f8c7d8454d5c.webp`,
      `${BASE}/Edelweiss/914e03106272885.5f8c7d844cb3a.webp`,
      `${BASE}/Edelweiss/9898ca106272885.5f8c7d844aa87.webp`,
      `${BASE}/Edelweiss/9cebc6106272885.5f8c7d84546ba.webp`,
      `${BASE}/Edelweiss/IMG-20210412-WA0011.webp`,
      `${BASE}/Edelweiss/a4ffa4106272885.612001a64dc2d.webp`,
      `${BASE}/Edelweiss/b0485c106272885.5f8c7d8451830.webp`,
      `${BASE}/Edelweiss/b59841106272885.5f8c7d844d25e.webp`,
      `${BASE}/Edelweiss/c09fa6106272885.5f8c7d8451dc5.webp`,
      `${BASE}/Edelweiss/c1f4f3106272885.5f8c7d844bca8.webp`,
      `${BASE}/Edelweiss/c5c3fb106272885.5f8c7d8450bd4.webp`,
      `${BASE}/Edelweiss/c86762106272885.5f8c7d844c3fe.webp`,
      `${BASE}/Edelweiss/ce34ad106272885.5f8c7d844f743.webp`,
      `${BASE}/Edelweiss/d840e4106272885.5f8c7d8449f92.webp`,
      `${BASE}/Edelweiss/f29a78106272885.5f8c7d844fcfd.webp`,
      `${BASE}/Edelweiss/f93ffa106272885.5f8c7d84531ac.webp`,
      `${BASE}/Edelweiss/f94e4e106272885.5f8c7d845255d.webp`,
    ],
  },
  {
    title: "Edelweiss: Blue Bindi Project (2021)",
    category: "Social Campaign",
    tools: "Campaign · Illustration · Digital",
    cover: `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/Cover.webp`,
    images: [
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/463a8a246614053.69c8334cb48d9.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/491ca9246614053.69c8334cb064b.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/4d2aac246614053.69c8334cb0ecd.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/5fac6a246614053.69c8334cb3ba0.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/61f8c7246614053.69c8334cb5c66.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/71226d246614053.69c8334cb60fa.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/84649d246614053.69c8334cb2797.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/946e0e246614053.69c8334cb4cd8.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/a66cfc246614053.69c8334cb510a.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/b09b30246614053.69c8334cb58ab.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/c5b06f246614053.69c8334cb1d69.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/d09e67246614053.69c8334cb6aaf.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/edd749246614053.69c8334cb2797.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/f0e55a246614053.69c8334cb54e2.webp`,
      `${BASE}/Edelweiss%20-%20Blue%20Bindi%20Project%20%282021%29/fef193246614053.69c8334cb4516.webp`,
    ],
  },
  {
    title: "Client: Union Living (2022)",
    category: "Real Estate & Lifestyle",
    tools: "Brand Identity · Digital · Social",
    cover: `${BASE}/Union%20Living/Cover.webp`,
    images: [
      `${BASE}/Union%20Living/070711145343715.62f224c1aa11f.webp`,
      `${BASE}/Union%20Living/3394bb145343715.629cf500d6341.webp`,
      `${BASE}/Union%20Living/369127145343715.629cf500d4ffb.webp`,
      `${BASE}/Union%20Living/436eb1145343715.629cf500d5a27.webp`,
      `${BASE}/Union%20Living/706c1c145343715.62f224c1aac3e.webp`,
      `${BASE}/Union%20Living/8fe271145343715.62f224c1ab820.webp`,
      `${BASE}/Union%20Living/975975145343715.629cf500d2a2a.webp`,
      `${BASE}/Union%20Living/adc0ef145343715.629cf500d32d8.webp`,
      `${BASE}/Union%20Living/b1c725145343715.629cf500d3cd8.webp`,
      `${BASE}/Union%20Living/bd8925145343715.62cd43e9e4115.webp`,
      `${BASE}/Union%20Living/ddd81b145343715.629cf500d488c.webp`,
      `${BASE}/Union%20Living/ee090d145343715.629cf500d6cc9.webp`,
      `${BASE}/Union%20Living/f44dfd145343715.62f224c1ac289.webp`,
      `${BASE}/Union%20Living/f8bb34145343715.62cd43e9e38b7.webp`,
    ],
  },
  {
    title: "Everstar: Event Creatives",
    category: "Event Branding",
    tools: "Visual Identity · Social · Campaign",
    cover: `${BASE}/Everstar%20Event%20Creatives/Cover.webp`,
    images: [
      `${BASE}/Everstar%20Event%20Creatives/2396fd242969567.69785006354bd.webp`,
      `${BASE}/Everstar%20Event%20Creatives/Happy%20New%20Year%202026-02.webp`,
    ],
  },
  {
    title: "Lumens Technologies Event Creatives",
    category: "Event Branding",
    tools: "Visual Identity · Social · Campaign",
    cover: `${BASE}/Lumens%20Event%20Creatives/Cover.webp`,
    images: [
      `${BASE}/Lumens%20Event%20Creatives/0504c2221942449.67dcfb23b1eb4.webp`,
      `${BASE}/Lumens%20Event%20Creatives/133e6e242969567.6978500632149.webp`,
      `${BASE}/Lumens%20Event%20Creatives/1cfa2b221942449.6909cdfcb790a.webp`,
      `${BASE}/Lumens%20Event%20Creatives/1d3b4b242969567.69785006342ad.webp`,
      `${BASE}/Lumens%20Event%20Creatives/2138aa221942449.6909cdfcb6d36.webp`,
      `${BASE}/Lumens%20Event%20Creatives/23119d221942449.6909cdfcb61c2.webp`,
      `${BASE}/Lumens%20Event%20Creatives/3dc331221942449.6909cdfcb8286.webp`,
      `${BASE}/Lumens%20Event%20Creatives/5b0eb8221942449.67dcfa0c1c1b2.webp`,
      `${BASE}/Lumens%20Event%20Creatives/b5087c221942449.6909cdfcb3f92.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Christmas%202025-01.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Dussehra_2025-01.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Eid%20Mubarak%202025-02.webp`,
      `${BASE}/Lumens%20Event%20Creatives/fc058c221942449.6909cdfcb4a1c.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Happy%20Gudi%20Padwa-02.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Happy%20New%20Year%202026-01.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Independence%20Day-01.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Lumens%20New%20Year%20Cake_2026-01.webp`,
      `${BASE}/Lumens%20Event%20Creatives/Secret%20Santa_20122025-01-01.webp`,
    ],
  },
  {
    title: "Colossus: Event Creatives",
    category: "Event Branding",
    tools: "Visual Identity · Social · Print",
    cover: `${BASE}/Colossus%20Event%20Creatives/Cover.webp`,
    images: [
      `${BASE}/Colossus%20Event%20Creatives/88e86e242969567.6978500634b83.webp`,
      `${BASE}/Colossus%20Event%20Creatives/Christmas%202025-03.webp`,
      `${BASE}/Colossus%20Event%20Creatives/ddd37c221942771.67dcfbbd27fc7.webp`,
      `${BASE}/Colossus%20Event%20Creatives/e1ba56221942771.67dcfbbd28a9c.webp`,
      `${BASE}/Colossus%20Event%20Creatives/Eid%20Mubarak%202025-03.webp`,
      `${BASE}/Colossus%20Event%20Creatives/Happy%20Gudi%20Padwa-03.webp`,
      `${BASE}/Colossus%20Event%20Creatives/Happy%20New%20Year%202026-04.webp`,
      `${BASE}/Colossus%20Event%20Creatives/Independence%20Day-02.webp`,
    ],
  },
  {
    title: "EMS Profile: Lumens Tech",
    category: "Brand Identity",
    tools: "Visual Identity · Branding · Logo",
    cover: `${BASE}/EMS/Cover.webp`,
    images: [
      `${BASE}/EMS/0d10aa214344467.6756d64aecc78.webp`,
      `${BASE}/EMS/3f4c9d214344467.6756d64aef86f.webp`,
      `${BASE}/EMS/47b2f5214344467.6756d64aec3f5.webp`,
      `${BASE}/EMS/48261f214344467.6756d64aea743.webp`,
      `${BASE}/EMS/6f4442214344467.6756d64aead50.webp`,
      `${BASE}/EMS/6fa13f214344467.6756d64aed287.webp`,
      `${BASE}/EMS/87d5c8214344467.6756d64aebd6a.webp`,
      `${BASE}/EMS/b42c72214344467.6756d64aef01d.webp`,
      `${BASE}/EMS/b6f1d6214344467.6756d64aeb554.webp`,
      `${BASE}/EMS/e638d4214344467.6756d64aee05c.webp`,
      `${BASE}/EMS/f3d1db214344467.6756d64aee7f3.webp`,
      `${BASE}/EMS/f4ed4c214344467.6756d64ae9f03.webp`,
    ],
  },
  {
    title: "Plexilent: Event Creatives",
    category: "Event Branding",
    tools: "Visual Identity · Social · Campaign",
    cover: `${BASE}/Plexilent%20Event%20Creatives/Cover.webp`,
    images: [
      `${BASE}/Plexilent%20Event%20Creatives/37286a221943043.67dcfd21495e4.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/6252a5242969567.6978500633195.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/b13f86221943043.67dcfd2147dc6.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/Christmas%202025-02.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/Dussehra_2025-02.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/Eid%20Mubarak%202025-01.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/f7888a221943043.67dcfd2148753.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/Happy%20Gudi%20Padwa-01.webp`,
      `${BASE}/Plexilent%20Event%20Creatives/Independence%20Day-03.webp`,
    ],
  },
  {
    title: "Edelweiss Festive Mailers",
    category: "Event Branding",
    tools: "Visual Identity · Social · Campaign",
    cover: `${BASE}/Edelweiss%20-%20Festivals/Cover.webp`,
    images: [
      `${BASE}/Edelweiss%20-%20Festivals/169c65106269879.5f8c6d225035f.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/350b35106269879.5f8c6d2252800.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/7581ef106269879.5f8c6d224f1a8.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/89d6d1106269879.5f8c6d224e3c4.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/8cf020106269879.5f8c6d224eabd.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20200714-WA0006.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20200810-WA0006.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20200811-WA0004.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20200811-WA0008.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20200812-WA0003.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20201111-WA0001.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20210128-WA0017.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/IMG-20210325-WA0000.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/ae6e9d106269879.5f8c6d2252f1e.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/bab614106269879.5f8c6d225143e.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/d29d5e106269879.5f8c6d2251f7c.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/d83c77106269879.5f8c6d225186a.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/d8aa6d106269879.5f8c6d224f970.webp`,
      `${BASE}/Edelweiss%20-%20Festivals/df22d3106269879.5f8c6d224feaa.webp`,
    ],
  },
  {
    title: "Booth Visual Branding: Smart Home Expo (2024)",
    category: "Events & Exhibitions",
    tools: "Exhibition Design · 3D Environment · Event",
    cover: `${BASE}/Plexilent%20Smart%20Home%20Expo/Cover.webp`,
    images: [
      `${BASE}/Plexilent%20Smart%20Home%20Expo/1c1368198625625.664461289cf54.webp`,
      `${BASE}/Plexilent%20Smart%20Home%20Expo/8ae133198625625.664461289cae2.webp`,
      `${BASE}/Plexilent%20Smart%20Home%20Expo/95c25d198625625.664461289d627.webp`,
      `${BASE}/Plexilent%20Smart%20Home%20Expo/e02edd198625625.664461289e466.webp`,
      `${BASE}/Plexilent%20Smart%20Home%20Expo/e03256198625625.664461289c61f%20(1).webp`,
      `${BASE}/Plexilent%20Smart%20Home%20Expo/e03256198625625.664461289c61f.webp`,
    ],
  },
  {
    title: "Edelweiss Infinity Program Campaign (2021)",
    category: "Corporate Program",
    tools: "Brand Design · Print · Digital",
    cover: `${BASE}/Edelweiss%20Infinity%20Program/Cover.webp`,
    images: [
      `${BASE}/Edelweiss%20Infinity%20Program/09a293106273165.5f8c7f1111a13.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/1fae79106273165.5f8c7f1113731.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/44fb8f106273165.5f8c7f1113111.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/59bed8106273165.5f8c7f1111f0f.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/702d35106273165.5f8c7f11125ce.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/77203d106273165.5f8c7f1112baf.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/8970cf106273165.5f8c7f1113bfc.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/975998106273165.5f8c7f11140b2.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/IMG-20200720-WA0002.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/IMG-20200720-WA0003.webp`,
      `${BASE}/Edelweiss%20Infinity%20Program/IMG-20200720-WA0004.webp`,
    ],
  },
  {
    title: "Lumens: Core Values",
    category: "Tech & Software",
    tools: "Brand Design · Identity · Social",
    cover: `${BASE}/Lumens%20Technologies%20-%20Motto/Cover.webp`,
    images: [
      `${BASE}/Lumens%20Technologies%20-%20Motto/6d9478190285845.65b8d187c1bb5.webp`,
      `${BASE}/Lumens%20Technologies%20-%20Motto/aca17b190285845.65b8d187c4642.webp`,
      `${BASE}/Lumens%20Technologies%20-%20Motto/cc6126190285845.65b8d187c2864.webp`,
      `${BASE}/Lumens%20Technologies%20-%20Motto/f1a967190285845.65b8d187c3771.webp`,
    ],
  },
  {
    title: "Colossus: Smart Catalog",
    category: "Product Design",
    tools: "3D Visualization · Product Design · Catalog",
    cover: `${BASE}/Colossus%20Smart%20Catalog/Cover.webp`,
    images: [
      `${BASE}/Colossus%20Smart%20Catalog/1a58c7190320979.65b92c4736072.webp`,
      `${BASE}/Colossus%20Smart%20Catalog/8ea94c190320979.65b92c4736d1d.webp`,
      `${BASE}/Colossus%20Smart%20Catalog/ae5adb190320979.65b92c4735444.webp`,
      `${BASE}/Colossus%20Smart%20Catalog/d23f82190320979.65b92c4739d31.webp`,
      `${BASE}/Colossus%20Smart%20Catalog/d9c0f1190320979.65b92c4737919.webp`,
    ],
  },
  {
    title: "Colossus: Standard Catalog",
    category: "Print Media",
    tools: "3D Visualization · Print · Catalog",
    cover: `${BASE}/Colossus%20Standard%20Catalog/Cover.webp`,
    images: [
      `${BASE}/Colossus%20Standard%20Catalog/2985d2190322257.65b92fd2b3e0a.webp`,
      `${BASE}/Colossus%20Standard%20Catalog/8e1ecb190322257.65b92fd2b66c8.webp`,
    ],
  },
  {
    title: "Everstar Product Catalog",
    category: "Tech Visuals",
    tools: "3D Product Renders · Catalog · Tech",
    cover: `${BASE}/Everstar%20Catalog/Cover.webp`,
    images: [
      `${BASE}/Everstar%20Catalog/01db29190329127.65b9436121f86.webp`,
      `${BASE}/Everstar%20Catalog/071fe2190329127.65b941d0089d6.webp`,
      `${BASE}/Everstar%20Catalog/145360190329127.65b943612089e.webp`,
      `${BASE}/Everstar%20Catalog/3e124c190329127.65b943612140f.webp`,
      `${BASE}/Everstar%20Catalog/801729190329127.65b943611e1ed.webp`,
      `${BASE}/Everstar%20Catalog/a1e6cd190329127.65b941d007456.webp`,
      `${BASE}/Everstar%20Catalog/d3a2a2190329127.65b943611fccb.webp`,
    ],
  },
  {
    title: "Logofolio",
    category: "Brand Identity",
    tools: "Brand Identity · Logo Design · 3D Presentation",
    cover: `${BASE}/Logos%20Branding/Cover.webp`,
    images: [
      `${BASE}/Logos%20Branding/1bc0c4140666299.62458e691c9e2.webp`,
      `${BASE}/Logos%20Branding/3d71e1140666299.62458e691f51e.webp`,
      `${BASE}/Logos%20Branding/5431b2140666299.62458e691aa3f.webp`,
      `${BASE}/Logos%20Branding/6b04e7140666299.62458e691d3ae.webp`,
      `${BASE}/Logos%20Branding/8d038b140666299.62458e691b635.webp`,
      `${BASE}/Logos%20Branding/d85fa2140666299.62458e691bec6.webp`,
    ],
  },
  {
    title: "Smart Home Magazine: Plexilent Edition.",
    category: "Editorial & Digital",
    tools: "Magazine Design · Layout · Digital",
    cover: `${BASE}/Smart%20Home%20Magazine/Cover.webp`,
    images: [
      `${BASE}/Smart%20Home%20Magazine/0c2348165125045.6401eb0691efd.webp`,
      `${BASE}/Smart%20Home%20Magazine/43cb9a165125045.6401eb0692977.webp`,
      `${BASE}/Smart%20Home%20Magazine/4e2d63165125045.6401eb068e642.webp`,
      `${BASE}/Smart%20Home%20Magazine/55f653165125045.6401eb069140a.webp`,
      `${BASE}/Smart%20Home%20Magazine/b09208165125045.6401eb0690927.webp`,
      `${BASE}/Smart%20Home%20Magazine/fe3b05165125045.6401eb068fe6e.webp`,
    ],
  },
  {
    title: "Plexilent: Smart Bulb Promotion",
    category: "Tech Visuals",
    tools: "Campaign · 3D Visualization · Digital",
    cover: `${BASE}/Plexilent%20Smart%20Bulb%20Promotion/Cover.webp`,
    images: [
      `${BASE}/Plexilent%20Smart%20Bulb%20Promotion/354e85210150057.670cb32ff2465.webp`,
      `${BASE}/Plexilent%20Smart%20Bulb%20Promotion/766841210150057.670cb32ff0af2.webp`,
      `${BASE}/Plexilent%20Smart%20Bulb%20Promotion/b2b72c210150057.670cb32ff1363.webp`,
      `${BASE}/Plexilent%20Smart%20Bulb%20Promotion/d96508210150057.670cb32ff00f2.webp`,
    ],
  },
  {
    title: "Client: Marvellous Decorations (2022)",
    category: "Events & Decor",
    tools: "Branding · Visuals · Print",
    cover: `${BASE}/Marvellous%20Decorations/Cover.webp`,
    images: [
      `${BASE}/Marvellous%20Decorations/046c21145344267.629cf7716f8ae.webp`,
      `${BASE}/Marvellous%20Decorations/3d43d6145344267.629cf7716c5a6.webp`,
      `${BASE}/Marvellous%20Decorations/56bca9145344267.629cf7716dd05.webp`,
      `${BASE}/Marvellous%20Decorations/871acc145344267.629cf7716d07c.webp`,
      `${BASE}/Marvellous%20Decorations/8e8a43145344267.629cf7716e918.webp`,
      `${BASE}/Marvellous%20Decorations/a073f5145344267.629cf771696eb.webp`,
      `${BASE}/Marvellous%20Decorations/aa00de145344267.629cf7716fe8d.webp`,
      `${BASE}/Marvellous%20Decorations/ab9b5c145344267.629cf7716f2ef.webp`,
      `${BASE}/Marvellous%20Decorations/c32791145344267.629cf7716bae3.webp`,
      `${BASE}/Marvellous%20Decorations/f1a5d5145344267.629cf7716a3f5.webp`,
    ],
  },
  {
    title: "Mocha Mousse: Pantone",
    category: "Fusion Design",
    tools: "Visual Identity · Fusion Design · Packaging",
    cover: `${BASE}/Mocha%20Mousse%20Meets%20India/Cover.webp`,
    images: [
      `${BASE}/Mocha%20Mousse%20Meets%20India/2a8480214343961.6756d4cecd20f.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/2be2d8214343961.6756d4ced05a2.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/2f2575214343961.6756d4cecfff5.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/394008214343961.6756d4ced19a6.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/3e0a45214343961.6756d4ced21ab.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/400493214343961.6756d4cecbe93.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/573d44214343961.6756d4cecfa01.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/6697c4214343961.6756d4ced11c1.webp`,
      `${BASE}/Mocha%20Mousse%20Meets%20India/abf121214343961.6756d4ceccc60.webp`,
      `${BASE}/Mocha%20Mousse%20Meets India/b9d283214343961.6756d4cecc6a1.webp`,
    ],
  },
  {
    title: "Lumens: LIFE",
    category: "Interior Visuals",
    tools: "3D Interior · Tech Branding · Visuals",
    cover: `${BASE}/Lumens%20LIFE%20Expansion/Cover.webp`,
    images: [
      `${BASE}/Lumens%20LIFE%20Expansion/232d36190286689.65b8d405b22ab.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/4b517e190286689.65b8d405ae3dd.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/4eadb8190286689.65b8d405b30be.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/6207a7190286689.65b8d405ab9ff.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/68bd57190286689.65b8d405af240.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/b2806f190286689.65b8d405b00b7.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/c11981190286689.65b8d405b3f1a.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/df63c3190286689.65b8d405ac873.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/f68c9f190286689.65b8d405ad6be.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/fa0881190286689.65b8d405b176a.webp`,
      `${BASE}/Lumens%20LIFE%20Expansion/fedb9b190286689.65b8d405aad7b.webp`,
    ],
  },
  {
    title: "Plexilent (2024)",
    category: "Brand Strategy",
    tools: "Brand Strategy · Visual Identity · 3D",
    cover: `${BASE}/Plexilent%20Branding%202024/Cover.webp`,
    images: [
      `${BASE}/Plexilent%20Branding%202024/275ed1196414721.661f952c60520.webp`,
      `${BASE}/Plexilent%20Branding%202024/7c1e84196414721.661f952c5f560.webp`,
      `${BASE}/Plexilent%20Branding%202024/c33948196414721.661f952c5f042.webp`,
      `${BASE}/Plexilent%20Branding%202024/c7bd59196414721.661f952c60cbe.webp`,
      `${BASE}/Plexilent%20Branding%202024/cfd61f196414721.661f952c5fd45.webp`,
    ],
  },
  {
    title: "Client: Alcazar Salon",
    category: "Beauty & Wellness",
    tools: "Branding · Visual Identity · Social",
    cover: `${BASE}/Alcazar%20Salon/Cover.webp`,
    images: [
      `${BASE}/Alcazar%20Salon/69d68278050305.5c99e9c3d04df.webp`,
      `${BASE}/Alcazar%20Salon/7020cf78050305.5c99e9c3cfb4e.webp`,
      `${BASE}/Alcazar%20Salon/9719f878050305.5c99e9c3cffdd.webp`,
      `${BASE}/Alcazar%20Salon/e6578678050305.5c99e9c3d025d.webp`,
    ],
  },
  {
    title: "Shehlaa Khan and Seema Khan",
    category: "Fashion & Couture",
    tools: "Branding · Visual Identity · Print",
    cover: `${BASE}/Shehla%20&%20Seema/Cover.webp`,
    images: [
      `${BASE}/Shehla%20&%20Seema/14436778049551.5c99e60501e32.webp`,
      `${BASE}/Shehla%20&%20Seema/194e9278049551.5c99e6050280c.webp`,
      `${BASE}/Shehla%20&%20Seema/3a56bf78049551.5c99e60500b21.webp`,
      `${BASE}/Shehla%20&%20Seema/5e7c3078049551.5c99e60501078.webp`,
      `${BASE}/Shehla%20&%20Seema/75263678049551.5c99e605018eb.webp`,
      `${BASE}/Shehla%20&%20Seema/84e25178049551.5c99e605025e6.webp`,
      `${BASE}/Shehla%20&%20Seema/8a4e0478049551.5ccaa212050e2.webp`,
      `${BASE}/Shehla%20&%20Seema/8c52f278049551.5c99e6050160f.webp`,
      `${BASE}/Shehla%20&%20Seema/945d3a78049551.5ccaa21204d10.webp`,
      `${BASE}/Shehla%20&%20Seema/950a22165125045.6401eb068f20d.webp`,
    ],
  },
  {
    title: "Women's Day",
    category: "Social Branding",
    tools: "Campaign · Visual Identity · Social",
    cover: `${BASE}/Women's%20Day%20Creatives/Cover.webp`,
    images: [
      `${BASE}/Women's%20Day%20Creatives/1e0414221942449.67dcfa0c1cce6.webp`,
      `${BASE}/Women's%20Day%20Creatives/6d8a63245460165.69aea3c16b5f4.webp`,
      `${BASE}/Women's%20Day%20Creatives/74632b245460165.69aea3c16ab06.webp`,
      `${BASE}/Women's%20Day%20Creatives/a3dbc6221942771.67dcfbbd28550.webp`,
      `${BASE}/Women's%20Day%20Creatives/b25648245460165.69aea3c16b119.webp`,
    ],
  },
  {
    title: "Colossus: MPPT",
    category: "Industrial Branding",
    tools: "Visual Identity · Digital · Print",
    cover: `${BASE}/Colossus%20MPPT/Cover.webp`,
    images: [
      `${BASE}/Colossus%20MPPT/18d336235195573.6909c3df8e152.webp`,
      `${BASE}/Colossus%20MPPT/52a0b8235195573.6909c3df8d996.webp`,
      `${BASE}/Colossus%20MPPT/69bb55235195573.68d280bf62853.webp`,
      `${BASE}/Colossus%20MPPT/80809d235195573.691578c429741.webp`,
    ],
  },
  {
    title: "Colossus: NFC App UI",
    category: "App UI/UX",
    tools: "UI/UX · Mobile · App Design",
    cover: `${BASE}/Colossus%20NFC%20App/Cover.webp`,
    images: [
      `${BASE}/Colossus%20NFC%20App/b3b83f241699373.695e02ca1fe53.webp`,
    ],
  },
  {
    title: "Client Pitch: Badshah Sweets, Pune",
    category: "Brand Identity",
    tools: "Branding · Packaging · Print",
    cover: `${BASE}/Baadshah%20Sweets/Cover.webp`,
    images: [
      `${BASE}/Baadshah%20Sweets/76d71e78049323.5c99e4d363f17.webp`,
      `${BASE}/Baadshah%20Sweets/8b7b8978049323.5c99e4d3658f4.webp`,
      `${BASE}/Baadshah%20Sweets/94e7cd78049323.5c99e4d364db5.webp`,
      `${BASE}/Baadshah%20Sweets/a889a378049323.5c99e4d364324.webp`,
      `${BASE}/Baadshah%20Sweets/d3c24e78049323.5c99e4d365502.webp`,
      `${BASE}/Baadshah%20Sweets/da2b1678049323.5c99e4d3646da.webp`,
      `${BASE}/Baadshah%20Sweets/e0a06d78049323.5c99e4d364a4b.webp`,
      `${BASE}/Baadshah%20Sweets/fce78b78049323.5c99e4d365119.webp`,
      `${BASE}/Baadshah%20Sweets/fd3a7078049323.5c99e4d364526.webp`,
      `${BASE}/Baadshah%20Sweets/fe634378049323.5c99e4d365aaf.webp`,
    ],
  },
  {
    title: "Client Pitch: Crave Carousel Cafe",
    category: "Food & Beverage",
    tools: "Visual Identity · Menu Design · Social",
    cover: `${BASE}/Crave%20Carousal/Cover.webp`,
    images: [
      `${BASE}/Crave%20Carousal/46dd86145344861.629cfa4c4fb97.webp`,
      `${BASE}/Crave%20Carousal/52bc80145344861.629cfa4c4f215.webp`,
      `${BASE}/Crave%20Carousal/9751d8145344861.629cfa4c4e77c.webp`,
      `${BASE}/Crave%20Carousal/c76970145344861.629cfa4c50d9d.webp`,
    ],
  },
  {
    title: "Client Pitch: KC Roasters",
    category: "Café & Coffee",
    tools: "Brand Design · Packaging · Menu",
    cover: `${BASE}/KC%20Roasters/Cover.webp`,
    images: [
      `${BASE}/KC%20Roasters/21f0b988656541.5ddd1221db3ef.webp`,
      `${BASE}/KC%20Roasters/ea53e588656541.5ddd1221dae35.webp`,
    ],
  },
  {
    title: "Client Pitch: Wai Wai Noodles",
    category: "Food Brand",
    tools: "Campaign · Packaging · Photography",
    cover: `${BASE}/The%20Wai%20Wai%20Project/Cover.webp`,
    images: [
      `${BASE}/The%20Wai%20Wai%20Project/0a37a678324373.5ca1fd068490f.webp`,
      `${BASE}/The%20Wai%20Wai%20Project/10826e78324373.5ca1fd068427a.webp`,
      `${BASE}/The%20Wai%20Wai%20Project/739a1278324373.5ca1fd0684c8a.webp`,
      `${BASE}/The%20Wai%20Wai%20Project/e0e61278324373.5ca1fd0683ea1.webp`,
    ],
  },
];

type Project = typeof projects[0];

/* ─── Tilt Card ─── */
const TiltCard = ({ project, index, onViewWork }: { project: Project; index: number; onViewWork: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1025) return; // No tilt on mobile/tablet
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -12;
    const rotY = ((x - cx) / cx) * 12;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(x/rect.width)*100}% ${(y/rect.height)*100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1025) return; // No reset on mobile/tablet
    if (cardRef.current) cardRef.current.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    if (glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      className="work-tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="disable"
    >
      <div ref={glareRef} className="work-card-glare" />

      {/* Top */}
      <div className="work-card-top">
        <div>
          <span className="work-card-num">0{index + 1}</span>
          <h4 className="work-card-title">{project.title}</h4>
          <p className="work-card-cat">{project.category}</p>
        </div>
      </div>

      {/* Floating cover image */}
      <div className="work-card-img-wrap">
        <img src={project.cover} alt={project.title} className="work-card-img" />
      </div>

      {/* Bottom */}
      <div className="work-card-bottom">
        <span className="work-card-tools">{project.tools}</span>
        <button className="work-card-cta" onClick={onViewWork} data-cursor="disable">
          View Work →
        </button>
      </div>
    </div>
  );
};

/* ─── Main Work Section ─── */
const Work = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 600 ? 4 : 6);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 600 ? 4 : 6);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safety: If resizing makes our current page "disappear", jump back to the last valid page.
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [itemsPerPage, totalPages, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-title light-green-heading" id="lego-pieces">
          <span style={{ color: 'var(--textColor)' }}>My</span> <span style={{ color: 'var(--headingColor)' }}>LEGO</span> <span style={{ color: 'var(--textColor)' }}>Pieces</span>
        </h2>

        <div className="work-carousel-container">
          <div className="work-nav">
            <button 
              className={`work-nav-btn prev ${currentPage === 0 ? 'disabled' : ''}`}
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <HiArrowLongLeft size={32} />
            </button>
            <button 
              className={`work-nav-btn next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <HiArrowLongRight size={32} />
            </button>
          </div>

          <div className="work-carousel-outer">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="work-grid"
              >
                {currentProjects.map((project, index) => (
                  <TiltCard
                    key={currentPage * itemsPerPage + index}
                    project={project}
                    index={currentPage * itemsPerPage + index}
                    onViewWork={() => setOpenProject(project)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {openProject && (
        <MagicBento
          images={[openProject.cover, ...openProject.images]}
          projectName={openProject.title}
          onClose={() => setOpenProject(null)}
        />
      )}
    </div>
  );
};

export default Work;
