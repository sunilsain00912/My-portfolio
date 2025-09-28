'use client';

import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function AiBotButton() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: 'Feature Coming Soon!',
      description: 'Our AI assistant is currently under development.',
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg"
            onClick={handleClick}
          >
            <Bot size={28} />
            <span className="sr-only">AI Assistant</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="mr-2">
          AI Assistant
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
