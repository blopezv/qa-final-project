Feature: Eliminar un carrier
    Como cliente Web API
    Requiero Yo requiero eliminar un carrier y sus dependencias
    Remover el carrier de la base de datos

    Scenario: Registrar un usuario nuevo
    Given Datos del Carrier con id 8019
    When Envio estos datos con DELETE a ReconLogistics
    Then El servidor responde con estado 200
        And La respuesta contiene la Description "Carrier removed"
    
    Scenario Outline: Eliminar un carrier
    Given Datos del Carrier con id <id>
    When Envio estos datos con DELETE a ReconLogistics
    Then  El servidor responde con estado <code>
     And La respuesta contiene la Description <description>
    
    Examples:
    | id        | code | description                     |
    | 8019      | 200  | "Carrier removed"               |
    | 9         | 200  | "Carrier not removed"           |
    | 100000087 | 200  | "Carrier not found"             |