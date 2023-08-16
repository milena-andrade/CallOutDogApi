public class DogPictureApiLWC {
	@AuraEnabled
    public static String getDogPicture(){
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:DogPictureApi');
        req.setMethod('GET');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
    
}