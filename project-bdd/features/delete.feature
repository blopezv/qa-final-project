Feature: Eliminar un carrier
    Como cliente Web API
    Requiero Yo requiero eliminar un carrier y sus dependencias
    Remover el carrier de la base de datos

    Scenario: Registrar un usuario nuevo
    Given Datos del Carrier con id 8019
    When Envio estos datos con POST a ReconLogistics
    Then El servidor responde con estado 201
        And La respuesta contiene el Description "Carrier removed"