class Validates {
    // Método para validar datas no formato "dd/mm/yyyy"
    static validDate(date) {
        const dateFormated = new Date(date.split("/").reverse().join("-"));
        // Verifica se a data não é inválida e não é uma data futura
        return (
            dateFormated.toString() !== "Invalid Date" &&
            dateFormated <= new Date()
        );
    }

    // Método para validar endereços de e-mail
    static validEmail(email) {
        const regexEMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
        // Verifica se o e-mail corresponde ao padrão regex
        return regexEMAIL.test(email);
    }

    // Método para validar horas no formato "hh:mm:ss"
    static validHour(hour) {
        const hourFormated = hour.split(":");
        // Verifica se a hora é válida (0-24), os minutos (0-59) e os segundos (0-59)
        return (
            hourFormated.length === 3 &&
            hourFormated[0] <= 24 &&
            hourFormated[0] >= 0 &&
            hourFormated[1] < 60 &&
            hourFormated[1] >= 0 &&
            hourFormated[2] < 60 &&
            hourFormated[2] >= 0
        );
    }

    // Método para validar turnos (Matutino, Vespertino ou Noturno)
    static validTurn(turno) {
        return (
            turno === "Matutino" ||
            turno === "Vespertino" ||
            turno === "Noturno"
        );
    }

    // Método para validar turnos (Matutino, Vespertino ou Noturno)
    static validEstado(estado) {
        return (
            estado === "AC" ||
            estado === "AL" ||
            estado === "AP" ||
            estado === "AM" ||
            estado === "BA" ||
            estado === "CE" ||
            estado === "DF" ||
            estado === "ES" ||
            estado === "GO" ||
            estado === "MA" ||
            estado === "MT" ||
            estado === "MS" ||
            estado === "MG" ||
            estado === "PA" ||
            estado === "PB" ||
            estado === "PR" ||
            estado === "PE" ||
            estado === "PI" ||
            estado === "RJ" ||
            estado === "RN" ||
            estado === "RS" ||
            estado === "RO" ||
            estado === "RR" ||
            estado === "SC" ||
            estado === "SP" ||
            estado === "SE" ||
            estado === "TO" ||
            estado === ""
        );
    }
}

module.exports = { Validates };
