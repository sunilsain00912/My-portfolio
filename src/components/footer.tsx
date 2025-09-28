export function Footer() {
  return (
    <footer className="bg-transparent mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Made with love by Frameblox
          </p>
        </div>
      </div>
    </footer>
  );
}
