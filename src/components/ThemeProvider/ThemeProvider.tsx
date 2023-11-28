"use client";

import { useEffect, useState } from "react";

import ThemeContext from "@/context/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if( !renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// Creamos el provider para la transicion de darkMode a lightMode usando el context Theme. Explicacion ->

// Este código se encarga de crear un proveedor de contexto para la transición entre los modos oscuro y claro utilizando el contexto de tema (`ThemeContext`) que se creó previamente. Aquí tienes una explicación línea por línea:

// 1. `"use client"`:
//    - Esto parece ser una declaración que no se encuentra en el código de React o JavaScript estándar. Puede ser una declaración personalizada utilizada en un entorno específico, pero no es parte de React ni JavaScript convencional.

// 2. Importación de módulos de React:
//    - Se importan los módulos `useEffect` y `useState` de React. Estos módulos se utilizan para gestionar efectos secundarios y el estado de un componente funcional en React.

// 3. Importación del contexto `ThemeContext`:
//    - Se importa el contexto `ThemeContext` que se creó en el código anterior. Este contexto contiene información sobre el tema y la función para cambiarlo.

// 4. Definición del componente `ThemeProvider`:
//    - Se define un componente funcional llamado `ThemeProvider` que toma un prop llamado `children`, que es un nodo React que representa los componentes hijos del `ThemeProvider`.

// 5. Inicialización del tema:
//    - Se intenta obtener el valor del tema (`darkTheme`) desde el almacenamiento local (`localStorage`). Si existe un valor almacenado en `"hotel-theme"`, se utiliza ese valor. De lo contrario, se establece en `false` por defecto.

// 6. Uso de `useState`:
//    - Se utiliza el hook `useState` para crear una variable de estado `darkTheme` y su función de actualización `setDarkTheme`. Se inicializa `darkTheme` con el valor obtenido en el paso anterior.

// 7. Proveedor de contexto:
//    - Se utiliza el componente `<ThemeContext.Provider>` para proporcionar el contexto del tema a los componentes hijos. Se pasa un objeto como valor con las propiedades `darkTheme` y `setDarkTheme`. Esto permite que los componentes hijos accedan y actualicen el tema a través del contexto.

// 8. Clases de CSS condicionales:
//    - Se asignan clases condicionales a los elementos HTML para aplicar estilos de acuerdo al valor de `darkTheme`. Si `darkTheme` es `true`, se agrega la clase `"dark"` al elemento raíz, lo que generalmente se utiliza para activar un tema oscuro. Además, se cambian las clases de texto y fondo según el tema. Por ejemplo, si `darkTheme` es `true`, el texto será blanco (`dark:text-white`) y el fondo será negro (`dark:bg-black`). Si `darkTheme` es `false`, se utilizan clases para el tema claro.

// 9. Renderizado de componentes hijos:
//    - Se renderizan los componentes hijos (`{children}`) dentro del elemento HTML que tiene las clases de CSS condicionales aplicadas, lo que afecta el estilo de los componentes según el tema seleccionado.

// Este componente `ThemeProvider` se utiliza para envolver otros componentes de la aplicación y proporcionarles el contexto del tema. Permite a los componentes hijos acceder al valor del tema y cambiarlo según sea necesario. Además, ajusta las clases de estilo para reflejar el tema actual.
