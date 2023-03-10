import { useEffect } from 'react';

function useKeyPress(targetKey: string, callback: () => void) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.code === targetKey) {
                callback();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [callback, targetKey]);
}

export default useKeyPress;