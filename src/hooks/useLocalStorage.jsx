import { useState } from "react";

export function useLocalStorage(key, defaultValue){
  const [localValue, setLocalValue] = useState(() => {
    try{
      const item = localStorage.getItem(key);
      if(item){
        return item;
      }
      return defaultValue;
    }catch(err){
      console.error(err);
      return defaultValue;
    }
  });

  const setValue = value => {
    try{
      setLocalValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    }catch(err){
      console.error(err);
    }
  }

  return [localValue, setValue];
}