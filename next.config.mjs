/** @type {import('next').NextConfig} */
const nextConfig = {
    'output': 'export',
    async redirects() {
        return [
            {
                source: 'https://www.austinlong.dev/:path*',
                destination: 'https://austinlong.dev/:path*',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
