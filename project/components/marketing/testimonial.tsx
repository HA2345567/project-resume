import { 
  Card, 
  CardContent, 
  CardFooter
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export default function Testimonial({
  quote,
  author,
  role,
  avatarUrl
}: TestimonialProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <Quote className="h-6 w-6 text-primary/50 mb-2" />
        <p className="text-muted-foreground italic">
          "{quote}"
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}