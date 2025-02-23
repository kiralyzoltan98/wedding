interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function PageContainer({ children, className, ...props }: PageContainerProps) {
  const style = "bg-background text-foreground max-h-screen max-w-screen" + className ? className : ""
  return (
    <div
      className={style}
      {...props}
    >
      {children}
    </div>
  );
}

export { PageContainer };
