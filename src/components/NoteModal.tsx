
import { useState, useEffect } from 'react';
import { Note } from '../types/note';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (note: Partial<Note>) => void;
  note?: Note;
}

export function NoteModal({ isOpen, onClose, onSave, note }: NoteModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState<'Finance' | 'Personal' | 'Fitness'>('Personal');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setTag(note.tag);
    } else {
      setTitle('');
      setDescription('');
      setTag('Personal');
    }
  }, [note, isOpen]);

  const handleSave = () => {
    if (!title.trim()) return;

    onSave({
      ...(note && { id: note.id }),
      title: title.trim(),
      description: description.trim(),
      tag,
    });

    onClose();
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setTag('Personal');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {note ? 'Edit Note' : 'Create New Note'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tag">Tag</Label>
            <Select value={tag} onValueChange={(value: 'Finance' | 'Personal' | 'Fitness') => setTag(value)}>
              <SelectTrigger className="border-2 focus:border-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border-2">
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Fitness">Fitness</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter note description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] border-2 focus:border-primary resize-none"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={!title.trim()}
            className="bg-gradient-to-r from-primary to-primary/90"
          >
            {note ? 'Update Note' : 'Create Note'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
