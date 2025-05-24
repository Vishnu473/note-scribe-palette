
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Your Privacy Matters</h3>
          </div>
          
          <div className="text-muted-foreground space-y-4 mb-8">
            <p>
              This app is designed with privacy in mind. All your notes and data are stored locally on your device using browser storage (like LocalStorage or IndexedDB).
            </p>
            
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No account required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Nothing is sent to our servers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>We don't collect or track any personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Everything you write stays on your device — you have full control.</span>
              </li>
            </ul>
            
            <p className="text-sm">
              If you clear your browser data or uninstall the app, your saved content will be lost unless you've backed it up manually.
            </p>
            
            <p className="font-medium text-primary">
              100% local. 0% cloud.
            </p>
          </div>
          
          <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 @Vishnu-kishore-tarini. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
