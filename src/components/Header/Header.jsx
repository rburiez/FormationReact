export default function Header({finH1, children})  {
    const valeurtitre = `Hello ${finH1}`;

    return (
        <>
            {valeurtitre}
            {children}
        </>
    )
}