/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // https://commons.wikimedia.org/wiki/File:Carolina_Chickadee1_by_Dan_Pancamo.jpg#/media/File:Carolina_Chickadee1_by_Dan_Pancamo.jpg
            {
              protocol: 'https',
              hostname: 'upload.wikimedia.org',
              port: '',
            },
          ],
    },
};

export default nextConfig;
