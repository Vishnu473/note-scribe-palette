
import { Pencil, Trash2, Tag } from 'lucide-react';
import { Note } from '../types/note';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const tagColors = {
  Finance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Personal: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Fitness: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
};

export function NoteCard({ note, onEdit, onDelete }: NoteCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 animate-fade-in border-2 hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <Badge className={tagColors[note.tag]} variant="secondary">
              {note.tag}
            </Badge>
          </div>
          <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-primary/10"
              onClick={() => onEdit(note)}
            >
              <Pencil className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
              onClick={() => onDelete(note.id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{note.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{note.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-muted-foreground">
          Updated {formatDate(note.updatedAt)}
        </p>
      </CardFooter>
    </Card>
  );
}
