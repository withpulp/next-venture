"use client"

import { Image as UIImage } from "@nextui-org/image"
import NextImage from "next/image"

// Image Docs: https://nextui.org/docs/components/image
// Image API: https://nextui.org/docs/components/image#api

// TODO: create ImageProps interface by extending UIImageProps and NextImageProps

const Image = (props: any) => <UIImage as={NextImage} {...props} />

export default Image
