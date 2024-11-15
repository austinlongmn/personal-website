import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";
import github_logo from "./images/github-mark/github-mark-white.svg";

export default function Footer({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Card className="p-4">
        <CardHeader>
          <h2>Contact</h2>
        </CardHeader>
        <CardBody className="p-4">
          <div className="flex flex-row gap-4">
            <Link href="https://github.com/austinlongmn">
              <Image
                src={github_logo}
                alt="GitHub Logo"
                width={30}
                height={30}
                className="pr-2"
              />
              <p className="pl-2">GitHub</p>
            </Link>
            <p>Email:</p>
            <Link href="mailto:austin@austinlong.dev">
              austin@austinlong.dev
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
