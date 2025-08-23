import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps extends React.ComponentPropsWithoutRef<typeof Input> {
  onSearch?: (value: string) => void;
}

const SearchBar = React.forwardRef<
  React.ElementRef<typeof Input>,
  SearchBarProps
>(({ className, onSearch, ...props }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
      <Input
        ref={ref}
        className="pl-10"
        placeholder="Buscar productos..."
        onKeyDown={handleKeyDown}
        {...props}
      />
    </div>
  );
});
SearchBar.displayName = "SearchBar";

export { SearchBar };