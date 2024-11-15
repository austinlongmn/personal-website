import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Footer({ className }: {className?: string }) {
  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <h2>Contact</h2>
        </CardHeader>
        <CardBody>
          <p>GitHub</p>
        </CardBody>
      </Card>
    </div>
  );
}
