
import { Note } from '../types/note';
import { NoteCard } from './NoteCard';

interface NotesGridProps {
  notes: Note[];
  onEditNote: (note: Note) => void;
  onDeleteNote: (id: string) => void;
}

export function NotesGrid({ notes, onEditNote, onDeleteNote }: NotesGridProps) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
          <span className="text-4xl">📝</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">No notes yet</h3>
        <p className="text-muted-foreground max-w-sm">
          Create your first note to get started organizing your thoughts and ideas.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEditNote}
          onDelete={onDeleteNote}
        />
      ))}
    </div>
  );
}
