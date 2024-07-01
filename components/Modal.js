const Modal = () => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[99999] flex items-center justify-center">
      <div className="max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700 max-h-[80vh]"></div>
    </div>
  );
};

export default Modal;
