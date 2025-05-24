
import { Moon, Sun, Palette } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleMode, changeColor } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-2">
          {theme.mode === 'light' ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-background border-2">
        <DropdownMenuItem onClick={toggleMode} className="cursor-pointer">
          {theme.mode === 'light' ? (
            <>
              <Moon className="h-4 w-4 mr-2" />
              Dark Mode
            </>
          ) : (
            <>
              <Sun className="h-4 w-4 mr-2" />
              Light Mode
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => changeColor('blue')} className="cursor-pointer">
          <div className="h-4 w-4 rounded-full bg-blue-500 mr-2" />
          Blue Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeColor('green')} className="cursor-pointer">
          <div className="h-4 w-4 rounded-full bg-green-500 mr-2" />
          Green Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeColor('yellow')} className="cursor-pointer">
          <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2" />
          Yellow Theme
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
