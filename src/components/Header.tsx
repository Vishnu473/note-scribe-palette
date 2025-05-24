
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onAddNote: () => void;
}

export function Header({ onAddNote }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">N</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Notes
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={onAddNote}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Note
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
