package pe.edu.upeu.jquery.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author admin
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Post {
    private int idpost;
    private String titulo;
    private String descripcion;
}