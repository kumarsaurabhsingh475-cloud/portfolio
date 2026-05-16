import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-secondary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40',
  outline:
    'border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent',
  ghost: 'text-text/80 hover:text-accent hover:bg-white/5',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  download,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="text-lg" aria-hidden />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
