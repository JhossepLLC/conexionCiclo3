/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pe.edu.upeu.jquery.test;

import com.google.gson.Gson;
import pe.edu.upeu.jquery.PostDaoImpl.PostDaoImpl;
import pe.edu.upeu.jquery.config.Conexion;
import pe.edu.upeu.jquery.dao.PostDao;


/**
 *
 * @author admin
 */
public class Test {
static PostDao pd = new PostDaoImpl();
//static Gson g = new Gson();
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here

        if(Conexion.getConexion()!=null){
            System.out.println("si");
        }else{
            System.out.println("no");
        }
        //System.out.println(g.toJson(pd.readAll()));
    }
}