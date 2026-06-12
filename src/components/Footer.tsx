export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#07090d] border-t border-[#2a3441]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#b8c0cc]">
          © {new Date().getFullYear()} Ferdinand Macagba. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/jared0565"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#b8c0cc] hover:text-[#c9a45e] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fbmacagba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#b8c0cc] hover:text-[#c9a45e] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:fbmacagba@gmail.com"
            className="text-sm text-[#b8c0cc] hover:text-[#c9a45e] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
