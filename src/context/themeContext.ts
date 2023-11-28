import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    setDarkTheme: () => null,
});

export default ThemeContext;

// Explicacion del codigo

// Claro, puedo explicarte este código en TypeScript que utiliza React. Este código se utiliza para crear un contexto en React que proporciona información sobre el tema (tema claro o tema oscuro) y una función para cambiar el tema. Aquí está una explicación línea por línea:

// 1. Importación de módulos de React:
//    - El código importa los módulos `Dispatch`, `SetStateAction` y `createContext` de la biblioteca React. `Dispatch` y `SetStateAction` son tipos genéricos utilizados para definir el tipo de la función que se encargará de cambiar el estado. `createContext` se utiliza para crear un contexto en React.

// 2. Definición del tipo `ThemeContextType`:
//    - Se define un tipo TypeScript llamado `ThemeContextType` que describe la forma del contexto. Este tipo contiene dos propiedades:
//      - `darkTheme`: Un booleano que indica si el tema es oscuro o no.
//      - `setDarkTheme`: Una función que se utilizará para cambiar el tema. Esta función toma un valor booleano y devuelve nada (`void`).

// 3. Creación del contexto:
//    - Se crea un contexto llamado `ThemeContext` utilizando la función `createContext`. Se le pasa un objeto como valor predeterminado. El objeto tiene dos propiedades:
//      - `darkTheme` se establece en `false` como valor predeterminado, lo que significa que inicialmente el tema no es oscuro.
//      - `setDarkTheme` es una función que no hace nada (`() => null`) como valor predeterminado. Esto también es solo un valor predeterminado, y se espera que se sobrescriba cuando se utilice el contexto en componentes de la aplicación.

// 4. Exportación del contexto:
//    - El contexto creado (`ThemeContext`) se exporta como un valor predeterminado para que otros componentes puedan importarlo y utilizarlo como un proveedor o consumidor de contexto en su aplicación.

// Este código es una base para crear un contexto que puede utilizarse para administrar el tema de una aplicación en React. Cuando otros componentes consumen este contexto, pueden acceder al valor de `darkTheme` para conocer el estado actual del tema y usar la función `setDarkTheme` para cambiar el tema de la aplicación.