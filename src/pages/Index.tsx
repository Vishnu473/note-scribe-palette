
import { useState } from 'react';
import { Note } from '../types/note';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Header } from '../components/Header';
import { NotesGrid } from '../components/NotesGrid';
import { NoteModal } from '../components/NoteModal';
import { toast } from '../hooks/use-toast';

const Index = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | undefined>();

  const generateId = () => Date.now().toString();

  const handleAddNote = () => {
    setEditingNote(undefined);
    setIsModalOpen(true);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (noteData: Partial<Note>) => {
    const timestamp = new Date().toISOString();

    if (editingNote) {
      // Update existing note
      setNotes(prev =>
        prev.map(note =>
          note.id === editingNote.id
            ? { ...note, ...noteData, updatedAt: timestamp }
            : note
        )
      );
      toast({
        title: "Note updated",
        description: "Your note has been successfully updated.",
      });
    } else {
      // Create new note
      const newNote: Note = {
        id: generateId(),
        title: noteData.title!,
        description: noteData.description!,
        tag: noteData.tag!,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
      setNotes(prev => [newNote, ...prev]);
      toast({
        title: "Note created",
        description: "Your note has been successfully created.",
      });
    }
  };

  const handleDeleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
    toast({
      title: "Note deleted",
      description: "Your note has been successfully deleted.",
      variant: "destructive",
    });
  };

  const sortedNotes = [...notes].sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header onAddNote={handleAddNote} />
      
      <main className="container mx-auto px-4 py-8">
        <NotesGrid
          notes={sortedNotes}
          onEditNote={handleEditNote}
          onDeleteNote={handleDeleteNote}
        />
      </main>

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
        note={editingNote}
      />
    </div>
  );
};

export default Index;
